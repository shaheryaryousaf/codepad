import React from 'react'
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'

// Import Components
import Screen from '../components/layout/Screen'

// Import Libraries
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

// Import Images
import topImage from '../assets/home/top_image.PNG'
import netflix from '../assets/home/svgexport-5.svg'
import shopify from '../assets/home/svgexport-6.svg'
import snowflake from '../assets/home/svgexport-7.svg'
import databricks from '../assets/home/svgexport-8.svg'
import slack from '../assets/home/svgexport-9.svg'
import oneMedical from '../assets/home/svgexport-10.svg'
import stitchFix from '../assets/home/svgexport-11.svg'
import citadel from '../assets/home/svgexport-12.svg'
import greenHouse from '../assets/home/svgexport-16.svg'
import lever from '../assets/home/svgexport-17.svg'
import goodTime from '../assets/home/svgexport-18.svg'
import smartRecruiters from '../assets/home/svgexport-19.svg'

const Home = () => {
  return (
    <Screen>
      <section className='home_page'>
        {/* Top Section */}
        <section className='top_section pt-5'>
          <Container>
            <Row className='text-center'>
              <Col md={9} className='m-auto'>
                <h1>Hire better candidates faster.</h1>
                <h5 className='mb-4'>
                  Leave the whiteboard behind with CoderPad’s intuitive
                  programming environment.
                </h5>
                <div className='mb-5'>
                  <Link to='/' className='home__link'>
                    Start Free Trial
                  </Link>
                </div>
                <Image src={topImage} fluid />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Happy Customer Section */}
        <section className='happy_customers pb-5'>
          <Container fluid>
            <Row>
              <Col md={5} className='m-auto text-center'>
                <h4>Join 2,000+ happy companies</h4>
              </Col>
              <Col md={12}>
                <ul className='customers'>
                  <li>
                    <Image src={netflix} />
                  </li>
                  <li>
                    <Image src={shopify} />
                  </li>
                  <li>
                    <Image src={snowflake} />
                  </li>
                  <li>
                    <Image src={databricks} />
                  </li>
                  <li>
                    <Image src={slack} />
                  </li>
                  <li>
                    <Image src={oneMedical} />
                  </li>
                  <li>
                    <Image src={stitchFix} />
                  </li>
                  <li>
                    <Image src={citadel} />
                  </li>
                </ul>
              </Col>
              <Col md={7} className='m-auto'>
                <p className='heading'>
                  Have you ever been in an interview that got awkward because
                  the candidate kept getting stuck?
                </p>
                <p>
                  It happens all the time: a programmer is given an interview
                  problem and an hour to solve it over the phone in a plain text
                  editor or on a whiteboard. They take a crack at it and write a
                  totally reasonable solution.
                </p>
                <p>
                  There’s just one hangup: the candidate hasn’t found that weird
                  bug in their solution. If they could just run their code, it’d
                  be super obvious. But they can’t.
                </p>
                <p>We fix that.</p>
                <p className='heading'>
                  Let candidates show off their real skills
                </p>
                <p>
                  CoderPad is an interview and screening tool designed to let
                  candidates write programs that run. It’s simple, fast, and
                  remarkably powerful. And it looks, feels and behaves way more
                  like your real-world, working environment than, say, a
                  whiteboard.
                </p>
                <p>
                  Hiring gets easier when you give your candidates the best
                  tools and the best experience (and{' '}
                  <a href='!#'>they definitely agree</a>). It doesn’t hurt that
                  it makes your life easier, too. When you collaborate with
                  candidates on writing working code, you see a more accurate
                  picture of their abilities — and they’ll like you better for
                  it, too.
                </p>
              </Col>
              <Col md={12} className='text-center '>
                <Image
                  src='https://coderpad.io/wp-content/uploads/2021/05/coderpad-ide-screenshot-1024x570.jpg'
                  fluid
                  className='mt-5'
                />
              </Col>
              <Col md={7} className='m-auto'>
                <p className='heading'>
                  Easy and customizable, built by engineers for engineers
                </p>
                <p>
                  It takes five seconds from starting a live interview or
                  take-home challenge to running a “Hello, World” in Java.
                  CoderPad makes it easy to set up your custom environment and
                  run code in{' '}
                  <a href='!#'>
                    over 30 of the most popular programming languages.
                  </a>
                </p>
                <p>
                  Check out our <a href='!#'>features</a> page for all of the
                  details.
                </p>
                <p className='heading'>Fast to set up, simple to scale</p>
                <p>
                  Single sign-on, team management, compliance, security, and
                  privacy controls. Spend less time on your set-up or customize
                  it fully using our API. We also offer integrations with some
                  best-in-class applicant tracking and scheduling tools.
                </p>
                <p>
                  Learn more on our <a href='!#'>integrations page.</a>
                </p>
              </Col>
              <Col md={8} className='m-auto clients'>
                <Row className='my-4'>
                  <Col md={6}>
                    <Image src={greenHouse} fluid />
                  </Col>
                  <Col md={6}>
                    <Image src={lever} fluid />
                  </Col>
                </Row>
                <Row className='my-4'>
                  <Col md={4}>
                    <Image src={goodTime} fluid />
                  </Col>
                  <Col md={4}>
                    <Image
                      src='https://coderpad.io/wp-content/themes/coderpad/assets/images/clara.png'
                      fluid
                    />
                  </Col>
                  <Col md={4}>
                    <Image src={smartRecruiters} fluid />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className='testimonials py-5'>
          <Container>
            <Row className='text-center'>
              <Col md={8} className='m-auto'>
                <h4 className='mb-4'>Got Questions?</h4>
                <Link to='/' className='home__link'>
                  Contact Us
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={8} className='m-auto'>
                <h5>Don’t just take our word for it</h5>
              </Col>
            </Row>
            <Row className='mt-3 testimonial'>
              <Col md={8} className='m-auto'>
                <Row>
                  <Col md={4} className='text-center'>
                    <Image
                      src='https://coderpad.io/wp-content/uploads/2020/12/tim-trefren-headshot.jpg'
                      fluid
                      roundedCircle
                    />
                  </Col>
                  <Col md={8}>
                    <p>
                      CoderPad is by far the best coding interview tool we’ve
                      used. It beats the pants off of all the other “live
                      editor” services out there – and then it lets you execute
                      code, too!
                    </p>
                    <p>
                      My goal is to simulate real work as much as I can in an
                      hour. CoderPad lets me do just that – the candidate gets
                      to write code in a language they know, run it, write test
                      cases, and debug. It’s so, so much better than just
                      pseudocoding on a whiteboard.
                    </p>
                    <p className='name'>
                      <b>Tim Trefren – Cofounder, Mixpanel</b>
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col md={4} className='text-center'>
                    <Image
                      src='https://coderpad.io/wp-content/uploads/2020/12/jason-fennell-headshot.jpg'
                      fluid
                      roundedCircle
                    />
                  </Col>
                  <Col md={8}>
                    <p>
                      CoderPad has been a great addition to our interviewing
                      toolkit. With it, you can watch a candidate iteratively
                      develop their code and then actually use the compiler for
                      debugging. This adds a whole new dimension to the process
                      and brings it one step closer to the holy grail of natural
                      coding in an interview.
                    </p>
                    <p className='name'>
                      <b>Jason Fennell – VP of Engineering, Yelp</b>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Plans Section */}
        <section className='plans_section py-5'>
          <Container>
            <Row>
              <Col md={12}>
                <h1 className='text-center'>
                  CoderPad plans grow with your team
                </h1>
              </Col>

              <Col md={11} className='tables m-auto py-5'>
                <Row>
                  <Col md={4}>
                    <div className='top'>
                      <h4 className='mb-0'>Personal</h4>
                      <p className='mb-0'>
                        <span className='amount'>$50</span> / month
                      </p>
                    </div>
                    <p className='description my-4'>
                      Single-user plan to collaborate with candidates on writing
                      working code
                    </p>
                    <Link
                      to='/'
                      className='btn btn-outline-secondary btn-block'
                    >
                      Start Free Trial
                    </Link>
                    <div className='main-features my-5'>
                      <h5>5 interviews</h5>
                      <h5>$15/interview for overages</h5>
                    </div>
                    <ListGroup variant='flush' className='features'>
                      <ListGroup.Item>
                        1 user account per company
                      </ListGroup.Item>
                      <ListGroup.Item>All code recorded</ListGroup.Item>
                      <ListGroup.Item>Built-in video chat</ListGroup.Item>
                      <ListGroup.Item>Drawing/whiteboard mode</ListGroup.Item>
                      <ListGroup.Item>Take-Home questions</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={4}>
                    <p className='highlight-label'>Most Popular</p>
                    <div className='top'>
                      <h4 className='mb-0'>Team</h4>
                      <p className='mb-0'>
                        <span className='amount'>$250 </span> / month
                      </p>
                    </div>
                    <p className='description my-4'>
                      Collaborate with your team on questions, files and
                      databases
                    </p>
                    <Link to='/' className='btn btn-secondary btn-block'>
                      Start Free Trial
                    </Link>
                    <div className='text-center mt-3'>
                      <Link to='/' className='buy_now'>
                        Buy Now
                      </Link>
                    </div>
                    <div className='main-features mt-3 mb-5'>
                      <h5>30 interviews</h5>
                      <h5>$15/interview for overages</h5>
                    </div>
                    <p className='additional'>All Personal features +</p>
                    <ListGroup variant='flush' className='features'>
                      <ListGroup.Item>Up to 20 user accounts</ListGroup.Item>
                      <ListGroup.Item>Role-based permissions</ListGroup.Item>
                      <ListGroup.Item>ATS integration</ListGroup.Item>
                      <ListGroup.Item>Company logo</ListGroup.Item>
                      <ListGroup.Item>6 Example questions</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={4}>
                    <div className='top'>
                      <h4 className='mb-0'>Business</h4>
                      <p className='mb-0'>
                        <span className='amount'>$750 </span> / month
                      </p>
                    </div>
                    <p className='description my-4'>
                      Level up your hiring with a plan geared to high-volume
                      interviewing
                    </p>
                    <Link
                      to='/'
                      className='btn btn-outline-secondary btn-block'
                    >
                      Start Free Trial
                    </Link>
                    <div className='text-center mt-3'>
                      <Link to='/' className='buy_now'>
                        Buy Now
                      </Link>
                    </div>
                    <div className='main-features mt-3 mb-5'>
                      <h5>90 interviews</h5>
                      <h5>$15/interview for overages</h5>
                    </div>
                    <p className='additional'>All Team features +</p>
                    <ListGroup variant='flush' className='features'>
                      <ListGroup.Item>Up to 50 user accounts</ListGroup.Item>
                      <ListGroup.Item>Invoicing option</ListGroup.Item>
                      <ListGroup.Item>SAML single sign-on</ListGroup.Item>
                      <ListGroup.Item>40+ Example questions</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>

              <Col md={11} className='enterprise p-5 m-auto'>
                <Row>
                  <Col md={12}>
                    <h4>Enterprise</h4>
                  </Col>
                  <Col md={9}>
                    <p className='m-0'>
                      Need a customized plan with more interviews, unlimited
                      user accounts, API access, a security review, and more?
                    </p>
                  </Col>
                  <Col md={3}>
                    <Link to='/'>
                      Contact Us{' '}
                      <FaLongArrowAltRight size={20} color='#428bca' />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </Screen>
  )
}

export default Home
