import Image from "next/image";

export default function FooterSection({ mainMenu }) {
    const links = mainMenu.map(link => ({
        ...link,
        url: link.url[0] === "#" ? `/${link.url}` : link.url})
    )

    return (
        <footer className="footer pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                        <div className="footer-widget">
                            <div className="logo">
                                <a href="https://climatewomen.org">
                                    <Image
                                        width={200}
                                        height={50}
                                        src="https://cdn.buttercms.com/L8gwV085Q4mal2nqMQgH"
                                        alt="logo"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </a>
                            </div>
                            <p className="desc">Our Blog is Built on
                            <a href="https://buttercms.com">
                                    <Image
                                        width={200}
                                        height={50}
                                        src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
                                        alt="logo"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </a>
                            
                            
                            </p>
                            
                            <ul className="social-links">
                                <li><a href="#0"><i className="lni lni-facebook"></i></a></li>
                                <li><a href="#0"><i className="lni lni-linkedin"></i></a></li>
                                <li><a href="#0"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="#0"><i className="lni lni-twitter"></i></a></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 offset-xl-1">
                        <div className="footer-widget">
                            <h3>About Us</h3>
                            <ul className="links">
                                {links.map((navLink) => (
                                    <li key={navLink.url}>
                                        <a href={navLink.url}>{navLink.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="footer-widget">
                            <h3>Subscribe to our Monthly Newsletter</h3>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDvve4xT2b0-5C09a-BRrenT604rs5n9BC6dNZDrzE6NYIJQ/viewform?embedded=true" width="600" height="200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            {/*<form action="submit">
                                <input type="email" placeholder="Email" />
                                <button className="main-btn btn-hover">Subscribe</button>
                                </form>*/}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}