import { useState } from 'react'
import { Diff2Html } from 'diff2html'
import fetch from 'isomorphic-unfetch'
import 'diff2html/src/ui/css/diff2html.css'

function Home() {
  const [diff, setDiff] = useState('')
  const [commit, setCommit] = useState('')

  function getDiff(commitUrl) {
    fetch(`https://api.github.com/repos/${commitUrl}`, {
      headers: {
        Accept: 'application/vnd.github.v3.diff'
      }
    })
      .then(res => {
        return res.text()
      })
      .then(diff => {
        const json = Diff2Html.getJsonFromDiff(diff)
        setDiff(
          Diff2Html.getPrettyHtml(json, {
            inputFormat: 'json',
            showFiles: true,
            matching: 'lines',
            outputFormat: 'side-by-side'
          })
        )
      })
  }

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(getDiff(commit))
        }}>
        <input
          onChange={e => setCommit(e.currentTarget.value)}
          type="text"
          placeholder="<username>/<repo>/commits/<commit>"
          style={{
            margin: '20px',
            padding: '20px',
            fontSize: '18px',
            width: 'calc(100vw - 100px)'
          }}
        />
      </form>
      <div dangerouslySetInnerHTML={{ __html: diff }} />
    </div>
  )
}

export default Home
