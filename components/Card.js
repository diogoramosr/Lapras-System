import Logo from '../public/images/logo.png'

function Card() {
    return (
        <div className='p-5 flex items-center justify-center flex-wrap'>
            <div className='relative w-80 p-5 m-2 border border-black rounded-lg overflow-hidden duration-75 '>
                <div className='duration-75'>
                    <img src={Logo} alt="LOGO" className='w-full min-w-100 max-w-5xl rounded-md'></img>
                </div>
                <h1 className='text-2xl pt-5 text-center'>Iot</h1>
                <div className='pt-5 '>
                    <p className='text-black duration-75'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis ipsam impedit perferendis eveniet fugiat iste accusamus sit.
                    </p>
                    <a href='#' className='relative inline-block p-2 pt-25 bg-black text-white rounded-3xl no-underline duration-75 outline-none mt-10'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card