import React from "react";
import styled from "styled-components";
import EmailButton from "../img/email.png";
import FacebookButton from "../img/facebook.png";
import RedditButton from "../img/reddit.png";
import TwitterButton from "../img/twitter.png";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  img {
    width: 35px;
    padding: 5px;
    border: 0;
    box-shadow: 0;
    display: inline;
    filter: saturate(0);

    :hover {
      filter: saturate(0.5);
    }
  }
`;

const ShareButton = () => {
  const url = `https://interspace.chat/`;

  return (
    <ButtonContainer id="share-buttons">
      {/*  Buffer 
      <a
        href="https://bufferapp.com/add?url=https://simplesharebuttons.com&amp;text=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/buffer.png"
          alt="Buffer"
        />
      </a>
*/}
      {/*  Digg 
      <a
        href="http://www.digg.com/submit?url=https://simplesharebuttons.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/diggit.png"
          alt="Digg"
        />
      </a>
      */}

      {/*  Email */}
      <a
        href={`mailto:?Subject=Join-me-in-the-interspace&amp;Body=Lets%20come%20together%20and%20chat ${url}`}
      >
        <img src={EmailButton} alt="Email" />
      </a>

      {/*  Facebook */}
      <a
        href={`http://www.facebook.com/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={FacebookButton} alt="Facebook" />
      </a>

      {/*  Google+ 
      <a
        href="https://plus.google.com/share?url=https://simplesharebuttons.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/google.png"
          alt="Google"
        />
      </a>
      */}

      {/*  LinkedIn 
      <a
        href={`http://www.linkedin.com/shareArticle?mini=true&amp;url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/linkedin.png"
          alt="LinkedIn"
        />
      </a>
        */}
      {/*  Pinterest 
      <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());">
        <img
          src="https://simplesharebuttons.com/images/somacro/pinterest.png"
          alt="Pinterest"
        />
      </a>
      */}

      {/*  Print 
      <button onclick={window.print()}>
        <img
          src="https://simplesharebuttons.com/images/somacro/print.png"
          alt="Print"
        />
      </button>
      */}

      {/*  Reddit */}
      <a
        href={`http://reddit.com/submit?url=${url}&amp;title=Check these portals man - interspace.chat`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={RedditButton} alt="Reddit" />
      </a>

      {/*  StumbleUpon
      <a
        href="http://www.stumbleupon.com/submit?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/stumbleupon.png"
          alt="StumbleUpon"
        />
      </a>
      */}

      {/*  Tumblr
      <a
        href="http://www.tumblr.com/share/link?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/tumblr.png"
          alt="Tumblr"
        />
      </a>
      */}

      {/*  Twitter */}
      <a
        href={`https://twitter.com/share?url=${url}&amp;text=Join%20me%20in%20the%20interspace&amp;hashtags=interspacechat, chatforhumans`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TwitterButton} alt="Twitter" />
      </a>

      {/*  VK 
      <a
        href="http://vkontakte.ru/share.php?url=https://simplesharebuttons.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/vk.png"
          alt="VK"
        />
      </a>
      */}

      {/*  Yummly 
      <a
        href="http://www.yummly.com/urb/verify?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/yummly.png"
          alt="Yummly"
        />
      </a>
      */}
    </ButtonContainer>
  );
};

export default ShareButton;
