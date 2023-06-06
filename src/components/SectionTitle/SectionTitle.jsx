
const SectionTitle = ({heading, subHeading}) => {
  
  return (
    <div className="text-center mx-auto md:my-8 w-5/12">
      <p className="mb-2 text-yellow-600">--- {subHeading} ---</p>
      <h3 className="text-4xl uppercase border-y-4 py-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;