import { useState } from 'react'
import styled from '@emotion/styled'
import 'diff2html/src/ui/css/diff2html.css'

const Container = styled.div({
  borderTop: 'solid 2px #ddd',
  cursor: 'pointer',
  padding: '40px 0',
  transition: '.3s'
})

const Header = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 0'
})

const Author = styled.a({
  display: 'flex',
  alignItems: 'center',
  color: '#333',
  fontWeight: 'bold',
  textDecoration: 'none'
})

const Avatar = styled.img({
  borderRadius: '100%',
  marginRight: 15
})

const Repo = styled.a({
  display: 'block',
  color: '#333',
  fontWeight: 'bold',
  padding: '5px 0',
  textDecoration: 'none',
  textAlign: 'right'
})

const Hash = styled.a({
  display: 'block',
  color: '#333',
  padding: '5px 0',
  textDecoration: 'none',
  textAlign: 'right'
})

const Body = styled.div({
  padding: '30px 0 20px'
})

const Message = styled.p({
  fontSize: 22,
  margin: 0
})

const FullMessage = styled.div({
  padding: '40px 0',
  lineHeight: 1.8
})

const Diff = styled.div({
  marginTop: 40,

  '.d2h-files-diff': {
    display: 'flex'
  },

  '.d2h-file-side-diff': {
    margin: 0
  }
})

function Commit() {
  const [active, setActive] = useState(false)

  return (
    <Container
      onClick={e => {
        setActive(!active)
      }}>
      <Header>
        <Author href="#">
          <Avatar src="https://i.pravatar.cc/50" />
          @chambaz
        </Author>
        <div>
          <Repo href="#">chambaz/audiocrawl</Repo>
          <Hash href="#">3c400ad2ca099968f7bf369691d45be261230a3c</Hash>
        </div>
      </Header>
      <Body>
        <Message>This is my awesome commit from today! 🤘</Message>
        <FullMessage style={{ display: active ? 'block' : 'none' }}>
          <p>
            Ut vitae dictum risus. Vestibulum ornare urna in pharetra vulputate.
            Nunc viverra venenatis purus. Mauris et porttitor magna, vel
            malesuada nulla. Cras et efficitur diam. Nulla eget lectus sed metus
            fringilla condimentum. Donec eu efficitur metus. Fusce est enim,
            tempor in sem ut, auctor sollicitudin metus. Morbi nec mauris in
            tortor scelerisque venenatis. Sed non justo imperdiet, posuere diam
            sit amet, auctor augue. Aenean consequat quam ac diam egestas, id
            lacinia urna imperdiet.
          </p>

          <Diff
            dangerouslySetInnerHTML={{
              __html: `<div><div className="d2h-file-list-wrapper">
    <div className="d2h-file-list-header">
        <span className="d2h-file-list-title">Files changed (3)</span>
        <a className="d2h-file-switch d2h-hide">hide</a>
        <a className="d2h-file-switch d2h-show">show</a>
    </div>
    <ol className="d2h-file-list">
    <li className="d2h-file-list-line">
    <span className="d2h-file-name-wrapper">
      <svg aria-hidden="true" className="d2h-icon d2h-changed" height="16" title="modified" version="1.1" viewBox="0 0 14 16" width="14">
          <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"></path>
      </svg>      <a href="#d2h-755258" className="d2h-file-name">components/exit-intent/index.twig</a>
      <span className="d2h-file-stats">
          <span className="d2h-lines-added">+4</span>
          <span className="d2h-lines-deleted">-5</span>
      </span>
    </span>
</li>
<li className="d2h-file-list-line">
    <span className="d2h-file-name-wrapper">
      <svg aria-hidden="true" className="d2h-icon d2h-changed" height="16" title="modified" version="1.1" viewBox="0 0 14 16" width="14">
          <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"></path>
      </svg>      <a href="#d2h-158487" className="d2h-file-name">components/form/styles.css</a>
      <span className="d2h-file-stats">
          <span className="d2h-lines-added">+7</span>
          <span className="d2h-lines-deleted">-0</span>
      </span>
    </span>
</li>
<li className="d2h-file-list-line">
    <span className="d2h-file-name-wrapper">
      <svg aria-hidden="true" className="d2h-icon d2h-changed" height="16" title="modified" version="1.1" viewBox="0 0 14 16" width="14">
          <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"></path>
      </svg>      <a href="#d2h-242278" className="d2h-file-name">components/newsletter/index.twig</a>
      <span className="d2h-file-stats">
          <span className="d2h-lines-added">+1</span>
          <span className="d2h-lines-deleted">-1</span>
      </span>
    </span>
</li>
    </ol>
</div><div className="d2h-wrapper">
    <div id="d2h-755258" className="d2h-file-wrapper" data-lang="twig">
    <div className="d2h-file-header">
      <span className="d2h-file-name-wrapper">
    <svg aria-hidden="true" className="d2h-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
        <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path>
    </svg>    <span className="d2h-file-name">components/exit-intent/index.twig</span>
    <span className="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span></span>
    </div>
    <div className="d2h-files-diff">
        <div className="d2h-file-side-diff">
            <div className="d2h-code-wrapper">
                <table className="d2h-diff-table">
                    <tbody className="d2h-diff-tbody">
                    <tr>
    <td className="d2h-code-side-linenumber d2h-info"></td>
    <td className="d2h-info">
        <div className="d2h-code-side-line d2h-info">@@ -21,10 +21,9 @@</div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      21
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">      best in WebAudio straight to your inbox once a month. Only </span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      22
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">      best-in-class WebAudio, we don't spam!</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      23
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">    &lt;/p&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-del">
      24
    </td>
    <td className="d2h-del">
        <div className="d2h-code-side-line d2h-del">
            <span className="d2h-code-line-prefix">-</span>
            <span className="d2h-code-line-ctn">    &lt;div className="exit-intent__form"&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-del d2h-change">
      25
    </td>
    <td className="d2h-del d2h-change">
        <div className="d2h-code-side-line d2h-del d2h-change">
            <span className="d2h-code-line-prefix">-</span>
            <span className="d2h-code-line-ctn"><del>      </del>{% include '_components/newsletter/index.twig' with {</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-del d2h-change">
      26
    </td>
    <td className="d2h-del d2h-change">
        <div className="d2h-code-side-line d2h-del d2h-change">
            <span className="d2h-code-line-prefix">-</span>
            <span className="d2h-code-line-ctn"><del>        </del>inline: true</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-del d2h-change">
      27
    </td>
    <td className="d2h-del d2h-change">
        <div className="d2h-code-side-line d2h-del d2h-change">
            <span className="d2h-code-line-prefix">-</span>
            <span className="d2h-code-line-ctn"><del>      </del>} %}</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-del">
      28
    </td>
    <td className="d2h-del">
        <div className="d2h-code-side-line d2h-del">
            <span className="d2h-code-line-prefix">-</span>
            <span className="d2h-code-line-ctn">    &lt;/div&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      29
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">  &lt;/div&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      30
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">&lt;/div&gt;</span>
        </div>
    </td>
</tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="d2h-file-side-diff">
            <div className="d2h-code-wrapper">
                <table className="d2h-diff-table">
                    <tbody className="d2h-diff-tbody">
                    <tr>
    <td className="d2h-code-side-linenumber d2h-info"></td>
    <td className="d2h-info">
        <div className="d2h-code-side-line d2h-info"></div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      21
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">      best in WebAudio straight to your inbox once a month. Only </span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      22
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">      best-in-class WebAudio, we don't spam!</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      23
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">    &lt;/p&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins d2h-change">
      24
    </td>
    <td className="d2h-ins d2h-change">
        <div className="d2h-code-side-line d2h-ins d2h-change">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn"><ins>    </ins>{% include '_components/newsletter/index.twig' with {</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins d2h-change">
      25
    </td>
    <td className="d2h-ins d2h-change">
        <div className="d2h-code-side-line d2h-ins d2h-change">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn"><ins>      </ins>inline: true<ins>,</ins></span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins">
      26
    </td>
    <td className="d2h-ins">
        <div className="d2h-code-side-line d2h-ins">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn">      center: true</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins d2h-change">
      27
    </td>
    <td className="d2h-ins d2h-change">
        <div className="d2h-code-side-line d2h-ins d2h-change">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn"><ins>    </ins>} %}</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      28
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">  &lt;/div&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      29
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">&lt;/div&gt;</span>
        </div>
    </td>
</tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div id="d2h-158487" className="d2h-file-wrapper" data-lang="css">
    <div className="d2h-file-header">
      <span className="d2h-file-name-wrapper">
    <svg aria-hidden="true" className="d2h-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
        <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path>
    </svg>    <span className="d2h-file-name">components/form/styles.css</span>
    <span className="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span></span>
    </div>
    <div className="d2h-files-diff">
        <div className="d2h-file-side-diff">
            <div className="d2h-code-wrapper">
                <table className="d2h-diff-table">
                    <tbody className="d2h-diff-tbody">
                    <tr>
    <td className="d2h-code-side-linenumber d2h-info"></td>
    <td className="d2h-info">
        <div className="d2h-code-side-line d2h-info">@@ -43,3 +43,10 @@</div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      43
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">    background: var(--blue);</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      44
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">  }</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      45
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">}</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
      
    </td>
    <td className="d2h-cntx d2h-emptyplaceholder">
        <div className="d2h-code-side-line d2h-code-side-emptyplaceholder d2h-cntx d2h-emptyplaceholder">
        </div>
    </td>
</tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="d2h-file-side-diff">
            <div className="d2h-code-wrapper">
                <table className="d2h-diff-table">
                    <tbody className="d2h-diff-tbody">
                    <tr>
    <td className="d2h-code-side-linenumber d2h-info"></td>
    <td className="d2h-info">
        <div className="d2h-code-side-line d2h-info"></div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      43
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">    background: var(--blue);</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      44
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">  }</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      45
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">}</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins">
      46
    </td>
    <td className="d2h-ins">
        <div className="d2h-code-side-line d2h-ins">
            <span className="d2h-code-line-prefix">+</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins">
      47
    </td>
    <td className="d2h-ins">
        <div className="d2h-code-side-line d2h-ins">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn">.form--center {</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins">
      48
    </td>
    <td className="d2h-ins">
        <div className="d2h-code-side-line d2h-ins">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn">  display: flex;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins">
      49
    </td>
    <td className="d2h-ins">
        <div className="d2h-code-side-line d2h-ins">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn">  justify-content: center;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins">
      50
    </td>
    <td className="d2h-ins">
        <div className="d2h-code-side-line d2h-ins">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn">  margin: 40px auto 0;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins">
      51
    </td>
    <td className="d2h-ins">
        <div className="d2h-code-side-line d2h-ins">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn">  text-align: center;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins">
      52
    </td>
    <td className="d2h-ins">
        <div className="d2h-code-side-line d2h-ins">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn">}</span>
        </div>
    </td>
</tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div id="d2h-242278" className="d2h-file-wrapper" data-lang="twig">
    <div className="d2h-file-header">
      <span className="d2h-file-name-wrapper">
    <svg aria-hidden="true" className="d2h-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
        <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path>
    </svg>    <span className="d2h-file-name">components/newsletter/index.twig</span>
    <span className="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span></span>
    </div>
    <div className="d2h-files-diff">
        <div className="d2h-file-side-diff">
            <div className="d2h-code-wrapper">
                <table className="d2h-diff-table">
                    <tbody className="d2h-diff-tbody">
                    <tr>
    <td className="d2h-code-side-linenumber d2h-info"></td>
    <td className="d2h-info">
        <div className="d2h-code-side-line d2h-info">@@ -1,4 +1,4 @@</div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-del d2h-change">
      1
    </td>
    <td className="d2h-del d2h-change">
        <div className="d2h-code-side-line d2h-del d2h-change">
            <span className="d2h-code-line-prefix">-</span>
            <span className="d2h-code-line-ctn">&lt;form className="form {% if inline %}form--inline{% endif %}" data-newsletter&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      2
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">  &lt;div className="input" data-input&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      3
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">    &lt;label className="input__label" for="email"&gt;Your Email&lt;/label&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      4
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">    &lt;input className="input__field" data-input-field data-email required id="email" type="email" name="EMAIL"&gt;</span>
        </div>
    </td>
</tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="d2h-file-side-diff">
            <div className="d2h-code-wrapper">
                <table className="d2h-diff-table">
                    <tbody className="d2h-diff-tbody">
                    <tr>
    <td className="d2h-code-side-linenumber d2h-info"></td>
    <td className="d2h-info">
        <div className="d2h-code-side-line d2h-info"></div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-ins d2h-change">
      1
    </td>
    <td className="d2h-ins d2h-change">
        <div className="d2h-code-side-line d2h-ins d2h-change">
            <span className="d2h-code-line-prefix">+</span>
            <span className="d2h-code-line-ctn">&lt;form className="form {% if inline %}form--inline{% endif %}<ins> {% if center %}form--center{% endif %}</ins>" data-newsletter&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      2
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">  &lt;div className="input" data-input&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      3
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">    &lt;label className="input__label" for="email"&gt;Your Email&lt;/label&gt;</span>
        </div>
    </td>
</tr><tr>
    <td className="d2h-code-side-linenumber d2h-cntx">
      4
    </td>
    <td className="d2h-cntx">
        <div className="d2h-code-side-line d2h-cntx">
            <span className="d2h-code-line-prefix"> </span>
            <span className="d2h-code-line-ctn">    &lt;input className="input__field" data-input-field data-email required id="email" type="email" name="EMAIL"&gt;</span>
        </div>
    </td>
</tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div></div>`
            }}
          />
        </FullMessage>
      </Body>
    </Container>
  )
}

export default Commit
