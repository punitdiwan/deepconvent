import Link from "next/link"

const HomePageGallery = () => {

    const slides = [
        { title: "https://images.unsplash.com/photo-1445280471656-618bf9abcfe0?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'View Gallery' },
        { title: "https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'View Gallery' },
        { title: "https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'View Gallery' },
        { title: "https://images.unsplash.com/photo-1445280471656-618bf9abcfe0?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'View Gallery' },
        { title: "https://images.unsplash.com/photo-1445280471656-618bf9abcfe0?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'View Gallery' },
        { title: "https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'View Gallery' },
        { title: "https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'View Gallery' },
        { title: "https://images.unsplash.com/photo-1445280471656-618bf9abcfe0?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'View Gallery' },

    ];


    return (
        <div className="p-0 mt-4 container-fliud mbo">
            <div className="p-0 m-0 row">
                {slides.map((data1, i) => {
                    return <div className="p-1 col-lg-3 col-md-4 col-sm-6 col-xs-12" key={i}>
                        <div class="parent">
                            <div class="child">
                                <img src={data1?.title} />
                                <Link href="Gallery"><button className="a_1">{data1.description}</button></Link>
                            </div>
                        </div>

                    </div>
                })}
                {/* <div className="col-lg-3">
                    <div class="wrapper">
                        <div class="parent" onclick="">
                            <div class="child bg-one">
                                <a href="#">Los Angeles</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* {slides.map((data1, i) => {
                    return <div className="col-lg-3">
                        <div class="wrapper">
                            <div class="parent" onclick="">
                                <div class="child bg-one">
                                    <img src={data1?.title} />
                                    <Link href="#"><a className="img_center_name">{data1.description}</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                })} */}


            </div>
        </div>
    )
}
export default HomePageGallery;