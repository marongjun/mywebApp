import React from 'react';
import '../style.css';
import posed from 'react-pose';
import Carousel from 'react-bootstrap/Carousel';
import MLprocess from '../pic/process.png'


const Container = posed.div({
    enter: {staggerChildren :50},
    exit:{staggerChildren:20,staggerDirection:-1}
  })
  
  const P = posed.p({
    enter:{y:0,opacity:1},
    exit:{y:50,opacity:0}
  })

  class NavListML extends React.Component {
    render () {
      return (
        <div class="container col-lg-8" style={{ textAlign: 'left', marginTop: '3%' }}>
          <span style={{ fontSize: '30px', color: '#FFFFF' }}>
          Music genre classification
          </span>
          <hr></hr>
        </div>
  
      )
    }
  }

class MLContent extends React.Component {
    render () {
      return (
        <Container>
            <div class="justify-content-center" style={{ fontFamily: 'Raleway', textAlign: 'left', lineHeight: '200%' }} >

                {/* ----------Overview-------- */}
                <div class="justify-content-center" style={{ display: 'flex' }}>
                    <div class="col-lg-8">            
                    <P class="highlighto" style={{ fontSize: '1.5rem'}}>Overview</P>                        
                    <P class="content"><br/>The task is to identify the music genre of songs, 
                    which is useful as a way to group music into categories that can be later used 
                    for recommendation or discovery.<br/><br/>
                    <b>
                    Dataset
                    </b><br/>Training dataset: 4363 songs <br/>Test dataset: 6544 songs<br/>
                    <b>
                        Classes
                    </b><br/>
                        10 labels: <br/>1 'Pop_Rock' 2 'Electronic' 3 'Rap' 4 'Jazz' 5 'Latin' 6 'RnB' 7 'International' 8 'Country' 9 'Reggae' 10 'Blues'
                    </P>
                    </div>
                </div>

                {/* ----------Data & analysis-------- */}
                <div class="justify-content-center" style={{ display: 'flex',marginTop:'2%' }}>
                    <div class="col-lg-8">            
                    <P class="highlightw" style={{ fontSize: '1.5rem'}}>Analysis and Training</P>                        
                    <P class="content"><br/>The picture below shows the process and here is the link to the implementation.<br/>
                    <a href="https://github.com/marongjun/MLproject" target="_blank" ><b>Show me the Code</b></a>
                    </P>
                    <img src={MLprocess} class="shadow d-block" style={{ width: '80%', margin: 'auto' }}></img><br/><br/>
                    </div>
                </div>

            </div>
        </Container>
      )}
}

export {NavListML,MLContent};