import React from 'react';
import {Helmet} from 'react-helmet-async';

function MetaTags() {
  return (
    <Helmet>
      <title>Harsh Rastogi | Software Engineer</title>
      <meta name="description" content="Portfolio of Harsh Rastogi - Backend Developer skilled in Node.js, Express, MongoDB, and DevOps. Explore my projects, resume, and contact details." />
      <meta name="keywords" content="Harsh Rastogi, Software Engineer, Backend Developer, Portfolio, IIIT Bhagalpur, CSE" />
      <meta name="author" content="Harsh Rastogi" />
      <meta property="og:title" content="Harsh Rastogi | Software Engineer | Developer" />
      <meta property="og:description" content="Explore my projects, skills, and resume." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://harshrastogi15.github.io/Personal/" />
      {/* <meta property="og:image" content="URL-to-your-image-or-logo" /> */}
    </Helmet>
  );
}

export default MetaTags;
