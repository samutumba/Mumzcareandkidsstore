export const Map = () => {
 return(<div className="w-full lg:px-12 px-4 my-4">
    <h2 className=" mt-7 lg:mt-0 text-center w-full text-xl font-bold font-title uppercase mb-3">Our Store Location</h2>
     {/* <iframe
  className="border-none mx-auto h-96 lg:h-[16rem] w-full lg:w-9/12"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAP_SECRET}
    &q=Mumz+care+and+kids+store,Kampala,Uganda`}>
   
     </iframe> */}
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.744892664102!2d32.58030314951509!3d0.34760949974514493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbbea01d07a9%3A0x42cca437bcbfbc9a!2sMumz%20care%20and%20kids%20store!5e0!3m2!1sen!2sca!4v1662403884342!5m2!1sen!2sca" className="border-none mx-auto mt-3 h-96 lg:h-[16rem] w-full lg:w-9/12" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>)
}