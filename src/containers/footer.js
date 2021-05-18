import React from 'react'
//import {Row, Column, Link, Title, Break} from '../components/footer/styles/footer'
import {Footer} from '../components'
export function FooterContainer() {
  return (
    <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break/>
            <Footer.Row>

                <Footer.Column>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">ways to Watch</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>


                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact user</Footer.Link>
                </Footer.Column>
                

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem Gift Card</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>
                
                
            </Footer.Row>
            <Footer.Text>Netflix United States</Footer.Text>
    </Footer>
      
  )
}


