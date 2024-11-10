import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <h1 className='text-3xl font-semibold text-center my-7'>About Our Blog</h1>
        <div className='text-md text-gray-500 flex flex-col gap-6'>
          <p>
            Welcome to our blog! This platform was created by our team for a flexi credit course and also to share our thoughts and ideas with the world. We are passionate developers who love to write about technology, coding, and everything in between.
          </p>
          <p>
            On this blog, you'll find articles and tutorials on topics such as web development, software engineering, and programming languages. We're always learning and exploring new technologies, so be sure to check back often for new content!
          </p>
          <p>
            We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.
          </p>
          <p>
            You can learn more about us and view our personal portfolios at{' '}
            <a href='https://kewalnanavati.vercel.app/' className='text-teal-500 hover:underline'>
              Kewal's Portfolio
            </a>,{' '}
            <a href='https://ayushikapgate.vercel.app/' className='text-teal-500 hover:underline'>
              Ayushi's Portfolio
            </a>,{' '}
            <a href='https://dhairyaamehra.vercel.app/' className='text-teal-500 hover:underline'>
              Dhairya's Portfolio
            </a>,{' '}
            <a href='https://aaryapatil.vercel.app/' className='text-teal-500 hover:underline'>
              Aarya's Portfolio
            </a>, and{' '}
            <a href='https://devvratsaini.vercel.app/' className='text-teal-500 hover:underline'>
              Devvrat's Portfolio
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
