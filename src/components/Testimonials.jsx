import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (
    <section>
        <div className="container mx-auto py-8 md:py-24 px-8 md:px-0">
            <div className="flex justify-center flex-col items-center">
                <div>
                    <h2 className="font-inter text-4xl font-bold text-gray-300">
                        Testimonials
                    </h2>
                    <div
                        className="border-t-6 border-primary w-24  my-4"
                    />
                    <p className="text-2xl font-inter text-gray-400 mb-8 tracking-[0.4rem]">
                        What Our Clients Say
                    </p>  
                </div>
            </div>
            <Carousel>
                <div className="w-full flex flex-col md:flex-row border border-gray-600 p-3 bg-gray-900/80 
                rounded-2xl"
                >
                    <img 
                        src="src/assets/testimonial1.png" 
                        alt="image" 
                        className="w-[300px] rounded-2xl"
                    />
                    <div className="text-left p-4 space-y-4 relative">
                        <h4 className="font-semibold text-gray-300">Life-Changing Fitness Experience!</h4>
                        <p className="font-inter text-sm text-gray-300">
                            Joining High Intensity was the best decision I’ve ever made for my health! The trainers 
                            are incredibly supportive, and the workouts push me to new limits. I’ve gained strength, 
                            lost weight, and feel more confident than ever. If you’re serious about transforming your
                            body, this is the place to be!.
                        </p>
                        <p className="">
                            <i>Michael R.</i>
                        </p>
                        <div className="absolute text-8xl font-bold font-space-grotesk text-gray-600 right-2">
                            ,,
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row border border-gray-600 p-2 bg-gray-900/80 
                rounded-2xl"
                >
                    <img 
                        src="src/assets/testimonials2.png" 
                        alt="image" 
                        className="w-[300px] rounded-2xl"
                    />
                    <div className="text-left p-4 space-y-4 relative">
                        <h4 className="font-semibold text-gray-300">A Gym That Feels Like Home!"</h4>
                        <p className="font-inter text-sm text-gray-300">
                            From day one, I felt welcomed and motivated at High Intensity. The energy in 
                            this gym is amazing, and the community is so encouraging. Whether you’re lifting 
                            weights, doing cardio, or attending group classes, you’ll always feel inspired to
                             push harder. Highly recommend!
                        </p>
                        <p className="">
                            <i>Sarah L.</i>
                        </p>
                        <div className="absolute text-8xl font-bold font-space-grotesk text-gray-600 right-2">
                            ,,
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row border border-gray-600 p-2 bg-gray-900/80 
                rounded-2xl"
                >
                    <img 
                        src="src/assets/testimonials2.png" 
                        alt="image" 
                        className="w-[300px] rounded-2xl"
                    />
                    <div className="text-left p-4 space-y-4 relative">
                        <h4 className="font-semibold text-gray-300">Life-Changing Fitness Experience!</h4>
                        <p className="font-inter text-sm text-gray-300">
                            Joining High Intensity was the best decision I’ve ever made for my health! The trainers 
                            are incredibly supportive, and the workouts push me to new limits. I’ve gained strength, 
                            lost weight, and feel more confident than ever. If you’re serious about transforming your
                            body, this is the place to be!.
                        </p>
                        <p className="">
                            <i>Michael R.</i>
                        </p>
                        <div className="absolute text-8xl font-bold font-space-grotesk text-gray-600 right-2">
                            ,,
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row border border-gray-600 p-2 bg-gray-900/80 
                rounded-2xl"
                >
                    <img 
                        src="src/assets/testimonial1.png" 
                        alt="image" 
                        className="w-[300px] rounded-2xl"
                    />
                    <div className="text-left p-4 space-y-4 relative">
                        <h4 className="font-semibold text-gray-300">Life-Changing Fitness Experience!</h4>
                        <p className="font-inter text-sm text-gray-300">
                            Joining High Intensity was the best decision I’ve ever made for my health! The trainers 
                            are incredibly supportive, and the workouts push me to new limits. I’ve gained strength, 
                            lost weight, and feel more confident than ever. If you’re serious about transforming your
                            body, this is the place to be!.
                        </p>
                        <p className="">
                            <i>Michael R.</i>
                        </p>
                        <div className="absolute text-8xl font-bold font-space-grotesk text-gray-600 right-2">
                            ,,
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    </section>
  )
}

export default Testimonials