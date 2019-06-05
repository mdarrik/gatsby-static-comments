import React from "react"
import CommentSection from '../components/comment-section'

export default () => {
  return (
    <main>
      <h1> Static Site Comments/Forum </h1>
      <section>
      <h2>About</h2>
      <p>
        This site is a simple idea for what a basic, static forum site/comments section could look like using Gatsby + Netlify.
        Uses Azure Webhooks to trigger new Gatsby builds when comments are submitted.
      </p>
      </section>
      <CommentSection />
    </main>
  )
}
