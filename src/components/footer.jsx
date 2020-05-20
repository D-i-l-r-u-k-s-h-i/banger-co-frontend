import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        
            <footer className="site-footer">
                <br/>
                <strong>&#127345;anger &#8523; &#8450;o</strong><br/>
                <h5 className='text-light'>Vehicle Rentals &#128664;</h5>
                <table>
                    <tr>
                        <td>
                            <div className="aboutus">
                                <h3 className='about_us'>About us</h3>
                                <p>We launched bangernco.lk to make booking an auto rental simple, fast and easy. We've continued to improve and invest in bangernco.lk to help you save time and money. We realized that finding the best deal on a car rental can be time consuming and confusing. </p>
                                <p>Provided you with The Perfect Car at the Best Price, we wish you a safe and enjoyable trip, no matter where and when you plan to go</p>
                            </div>
                        </td>
                        <td>
                        <h5 className='about_us'>Contact us: </h5><br/>☎ 07777 34 342<br/>📧 bangernco.lk@gmail.com
                        </td>
                    </tr>
                </table>
                &#169;bangernco.lk Coperation
            </footer>
        
    )
}

export default Footer
