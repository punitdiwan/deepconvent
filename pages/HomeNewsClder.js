import Link from "next/link"
const HomeNewsClder = () => {
    return (
        <div className="container mt-5" >
            <div className="row">
                <div className="col-lg-4 Latest_News" >
                    <button>Latest News</button >
                    <p className="mt-4">
                        The school has helped me a lot in opening up to new ideas and experiences.
                        There’s no doubt that our school excels in academic field. Along with academics,
                        the co- curricular part of the school is also excellent. Every single minute spent
                        here is always productive in one way or another. I would like to thank
                        the management and every educator of the school for always guiding me in
                        the right direction and helping me with my academics throughout.
                    </p>

                </div>
                <div className="col-lg-4 School_Calendar">
                    <button>School Calendar</button >
                    <p className="mt-4">
                        The school has helped me a lot in opening up to new ideas and experiences.
                        There’s no doubt that our school excels in academic field. Along with academics,
                        the co- curricular part of the school is also excellent. Every single minute spent
                        here is always productive in one way or another. I would like to thank
                        the management and every educator of the school for always guiding me in
                        the right direction and helping me with my academics throughout.
                    </p>
                </div>
                <div className="col-lg-4 Get_Touch">
                    <h4>Get In Touch</h4>
                    <input type="text" className="samaa" placeholder="Name" />
                    <input type="text" placeholder="class" />
                    <input type="text" placeholder="Hostel Required " />
                    <input type="email" placeholder="Email" />
                    <input type="number" placeholder="Phone no" />
                    <div className="submit_btn">
                        <input type="submit" placeholder="submit" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HomeNewsClder;