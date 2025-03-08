import Banner from "../components/Banner"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../components/Button"

const Contact = () => {
  return (
    <section>
      <Banner 
        label="Contact"
      />
      <div className="px-4 md:px-0 container mx-auto py-8 md:py-24 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-inter font-bold text-gray-300 md:text-6xl">
            GET IN TOUCH
          </h2>
          <div className="space-y-6 mt-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt 
                className="text-primary text-2xl" 
              />
              <p className="text-gray-300">+254-7003-3880</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail 
                className="text-primary text-2xl" 
              />
              <p className="text-gray-300">highintensity@mail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot 
                className="text-primary text-2xl" 
              />
              <p className="text-gray-300">	4821 Ridge Top Cir, Anchorage, Alaska 99508</p>
            </div>
          </div>
        </div>
        {/* email section */}
        <div>
          <div className="space-y-2">
            <div className="flex flex-col space-y-1">
              <label >Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email"
                className="border border-gray-500 w-[70%] py-2 pl-3 bg-gray-800/80 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Department</label>
              <select placeholder="" className="border bg-gray-800/80 py-2 w-[70%] px-3 border-gray-500
              text-gray-300">
                <option value="sales">Sales</option>
                <option value="manager">Manager</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Message</label>
              <textarea 
                name="textarea"
                placeholder="Your message..."
                className="w-[70%] bg-gray-800/80 border border-gray-500 h-[100px] pl-2" 
              />
            </div>
            <Button 
              label="SEND"
              className="bg-primary w-[70%] h-10 cursor-pointer hover:bg-primary/80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact