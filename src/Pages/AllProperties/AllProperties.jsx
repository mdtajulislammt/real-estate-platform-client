
import Container from "../../Components/Container";
import useAllPropertiesData from "../../Hooks/useAllPropertiesData";
import AllProperty from "./AllProperty";

const AllProperties = () => {
     const [allProperties] = useAllPropertiesData()
     console.log(allProperties);
  return (
    <div className="  ">
      <div>
        <img
          src="https://i.ibb.co/j6LwFfJ/allproperty-Banner.jpg"
          alt=""
          className=" w-full h-[80vh] object-cover "
        />
      </div>
        <Container>
      <div className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          allProperties?.map(property=><AllProperty key={property._id} property={property}></AllProperty>
          )
        }
      </div>
        </Container>
    </div>
  );
};

export default AllProperties;
