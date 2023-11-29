import Tilt from 'react-parallax-tilt';
import spacial1 from "../../../assets/special1.jpg"
import spacial2 from "../../../assets/special2.jpg"
import spacial3 from "../../../assets/special3.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const SpacialProperty = () => {
     return (
         <div className='my-10'>
          <SectionTitle
           heading2={'Property'}
            heading={'Spacial'}
             subHeading={'Property'}
             shortDes={'The Internet in Changing  the way, The Property Industry Works '}></SectionTitle>
           <div className=' bg-[#ffb900] md:flex space-y-8 md:space-y-0 gap-4 p-10 items-center justify-around'>
              <Tilt>
               <img src={spacial1} alt="" className=' w-[400px]' />
               <h2 className=' text-2xl font-bold text-center'>The Luxurious Villa </h2>
    </Tilt> 
              <Tilt>
               <img src={spacial2} alt="" className=' w-[400px]' />
               <h2 className=' text-2xl font-bold text-center'>The International Property </h2>
    </Tilt>
    <Tilt>
               <img src={spacial3} alt="" className=' w-[400px]' />
               <h2 className=' text-2xl font-bold text-center'>The New york Property </h2>
    </Tilt> 
          </div>
         </div>
     );
};

export default SpacialProperty;