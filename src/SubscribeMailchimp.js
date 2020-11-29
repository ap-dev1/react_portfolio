import React, { Component } from 'react';

// import the component
// https://www.npmjs.com/package/react-mailchimp-form
import Mailchimp from 'react-mailchimp-form';
 

class SubscribeMailchimp extends Component {
  render() {
    return (
        <Mailchimp

        // action='https://gmail.us8.list-manage.com/subscribe/post?u=9717b0c735d362d5a4e6c1bc9&amp;id=dd9118a97a'

        action="https://gmail.us8.list-manage.com/subscribe/post?u=9717b0c735d362d5a4e6c1bc9&amp;id=dd9118a97a"



        // action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
        fields={[
          {
            title: 'ggggggggggggggg',
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}

        messages = {
          {
            //sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "please enter an email address.",
            duplicate: "This address already exists.",
            button: "Notify me when it goes live"
          }
        }
        />
    );
  }
}
 
export default SubscribeMailchimp;