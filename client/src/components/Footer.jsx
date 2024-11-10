import { Footer, FooterDivider } from "flowbite-react";
import {Link } from 'react-router-dom'
export default function FooterCom() {
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5"> 
                        <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>MERN</span>Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                        <Footer.Title title="About US" />
                        <Footer.LinkGroup col>
                            <Footer.Link>
                                Ayushi Kapgate
                            </Footer.Link>
                            <Footer.Link
                            href="https://kewalnanavati.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                Kewal Nanavati
                            </Footer.Link>
                            <Footer.Link
                            href="https://dhairyaamehra.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                Dhairya Mehra
                            </Footer.Link>
                            <Footer.Link>
                                Aarya Patil
                            </Footer.Link>
                            <Footer.Link>
                                Devvrat Saini
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                    href="#"
                    by="MERN Blog"
                    year={new Date().getFullYear()}
                    />
                </div>
            </div>
        </Footer>
    );
}