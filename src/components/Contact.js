import React from "react";
import styled from "styled-components";
function Contact() {
  return (
    <Section>
      <div>
        <h1 className="heading">
          {" "}
          <span>contact</span> us{" "}
        </h1>

        <div className="row">
          <iframe
          className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509916.957423575!2d-123.79759793610344!3d37.18430344877116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sKaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1646305512079!5m2!1str!2str"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: "0" }}
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <form action="">
            <h3>Get In Touch</h3>
            <div class="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="phone" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea name="" placeholder="message"></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Contact;

const Section = styled.section`
  .heading {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 4rem;
    text-transform: capitalize;
    span {
      color: red;
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    .map {
      flex: 1 1 42rem;
      width: 100%;
    }
    form {
      flex: 1 1 42rem;
      padding: 2rem;
      border: 0.2rem solid #334;
      h3 {
        font-size: 2.5rem;
        padding-bottom: 1rem;
      }
      .inputBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        input {
          width: 49%;
        }
      }
      .inputBox input,
      textarea {
        padding: 1.2rem 1.4rem;
        font-size: 1.6rem;
        color: #777;
        margin: 0.7rem 0;
        border: 0.2rem solid #334;
      }
      textarea {
        width: 100%;
        height: 15rem;
        resize: none;
      }
      .btn {
        display: inline-block;
        margin-top: 1rem;
        padding: 1rem 3rem;
        cursor: pointer;
        background: #fff;
        font-size: 1.7rem;
        border: 0.2rem solid $black;
        &:hover {
          background: blue;
          border-color: blue;
          color: #fff;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .row {
      .map {
        display: none;
      }
      input {
        width: 100%;
      }
    }
  }
`;