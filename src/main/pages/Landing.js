import '../styles/landing.css';
import Navbar from '../global-components/Navbar';

function Landing() {
  return (
    <>
    <IntroSection/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <Footer/>
    </>
  );
}

export default Landing;

function IntroSection() {
    return (
    <>
        <Navbar/>
        <section className='flex flex-col justify-center text-center items-center intro-section p-6'>
            <div className='header-text-div min-w-md max-w-xl'>
            <h1 className='leading-normal lg:text-7xl text-5xl text-center font-anton intro-header-text fadein-animation'>Own a Store Online With MyShop</h1>
            </div>
            <div className='intro-info-div mt-6 floatup-animation'>
                <p>
                    Create your very own store easily for FREE, 
                    just by signing up to MyShop and start selling
                    online
                </p>
            </div>
            <div className='rounded-md text-center text-white font-bold p-5 mt-12 intro-get-started floatup-animation'>
                <a>Get Started</a>
            </div>
        </section>
    </>
    );
  }


  function SectionTwo() {
    return (
      <section className='fadein-animation flex lg:flex-row lg:text-left flex-col text-center p-12 lg:justify-around items-center '>
        <div>
        <div>
        <h3 className='font-playfair-display text-4xl lg:max-w-sm max-w-md'>
            All You Need To Sell Online, All In One Place
        </h3>

        <p className='mt-6 max-w-md'>
            Create Your Store, Upload Your Products, Respond to Customer Feedback all on MyShop
        </p>
        </div>
        <div>
            <div className='rounded-md text-center text-white font-bold p-5 mt-12 intro-get-started'>
                <a>Sign Up Now For Free</a>
            </div>
        </div>
        </div>
        <div className='lg:mt-6 mt-12'>
            <img src='/images/landing-1.png' alt='Landing One'/>
        </div>
      </section>
    );
  }

  function SectionThree() {
    return (
      <section className='fadein-animation flex lg:flex-row lg:text-left flex-col text-center p-12 lg:justify-around items-center '>
        <div className='lg:mb-6 mb-12'>
            <img src='/images/landing-2.png' alt='Landing Two'/>
        </div>

        <div>
            <div>
                <h3 className='font-playfair-display text-4xl lg:max-w-sm max-w-md'>
                    Manage Your Store With Ease From Anywhere In The World
                </h3>

                <p className='mt-6 max-w-md'>
                    Personal Computer, Tablet or Mobile, you can view orders, respond to customers,
                    and track your analytics from anywhere around the globe and with 
                    any device
                </p>
            </div>
            <div>
                <div className='rounded-md text-center text-white font-bold p-5 mt-12 intro-get-started'>
                    <a>Start Today</a>
                </div>
            </div>
        </div>
      </section>
    );
  }

  function SectionFour() {
    return (
      <section className='fadein-animation flex lg:flex-row lg:text-left flex-col text-center p-12 lg:justify-around items-center '>
        <div>
            <div>
                <h3 className='font-playfair-display text-4xl lg:max-w-sm max-w-md'>
                    Recieve Payment From Anyone, Anywhere In The World
                </h3>

                <p className='mt-6 max-w-md'>
                    Recieve Payments For Orders Easily, From Customers From Anywhere In The World
                </p>
            </div>
            <div>
                <div className='rounded-md text-center text-white font-bold p-5 mt-12 intro-get-started'>
                    <a>Create Your Account</a>
                </div>
            </div>
        </div>

        <div className='lg:mt-6 mt-12'>
            <img src='/images/landing-3.png' alt='Landing Two'/>
        </div>
      </section>
    );
  }


  function Footer() {
    return (
      <section className='flex flex-col justify-center text-center p-12 items-center '>
        <div>
            <div>
                <h3 className='font-playfair-display text-5xl lg:max-w-lg max-w-md'>
                    What Are You Waiting For, Join Us and Grow With MyShop
                </h3>
            </div>
            <div>
                <div className='rounded-md text-center text-white font-bold p-5 mt-12 intro-get-started'>
                    <a>Get Started Today For Free</a>
                </div>
            </div>
        </div>
      </section>
    );
  }
