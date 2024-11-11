import { Alert, Button, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [formData, setFormData] = useState({
    image: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png', // Default image
  });
  const [publishError, setPublishError] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false); // Loading state for content generation
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  const handleGenerateContent = async () => {
    if (!formData.title) {
      setPublishError('Please enter a title before generating content.');
      return;
    }
    setIsGenerating(true);
    setPublishError(null);
    try {
      const response = await fetch('/api/generate/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: formData.title }),
      });
      

      const data = await response.json();
      
      if (response.ok) {
        const generatedText = data.content.parts[0].text; // Extract the text content
        setFormData({ ...formData, content: generatedText }); // Update the content in formData
  
        // Update Quill editor content directly if needed
        quillRef.current.getEditor().setContents([
          { insert: generatedText }
        ]);
      } else {
        setPublishError(data.message); // Handle error if any
      }
    } catch (error) {
      setPublishError('Error while generating content');
    } finally {
      setIsGenerating(false);
    }
  };


  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>
        {formData.image && (
          <img
            src={formData.image}
            alt="Default or uploaded image"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          value={formData.content}
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <div className="flex gap-4">
          <Button type="submit" gradientDuoTone="purpleToPink">
            Publish
          </Button>
          <Button
            type="button"
            gradientDuoTone="cyanToBlue"
            onClick={handleGenerateContent}
            disabled={isGenerating} // Disable button while generating content
          >
            {isGenerating ? 'Generating...' : 'Generate Content'}
          </Button>
        </div>
        
      </form>
    </div>
  );
}
