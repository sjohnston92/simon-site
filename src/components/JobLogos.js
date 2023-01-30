import {useState,useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import Modal from 'react-modal';

//images
import msp from '../assets/msplogo.png';
import scan123 from '../assets/scan123.png';
import difenda from '../assets/White-Difenda-Logo.png';
import concentric from '../assets/images/Logo-Concentric.png';
import panther from '../assets/images/panther-logo.png'

const JobLogos = () => {

  const data = [
    {name: 'Panther', type: 'pro', img:panther, link:'this will be the link', content:'This will be summary of each'},
    {name: 'My Social Pracitce', type: 'pro', img:msp, link:'this will be the link', content:'This will be summary of each'},
    {name: 'Scan123', type: 'pro', img:scan123 , link:'this will be the link', content:'This will be summary of each'},
    {name: 'Concentric', type: 'pro', img: concentric, link:'this will be the link', content:'This will be summary of each'},
    {name: 'Defenda', type: 'pro', img:difenda, link:'this will be the link', content:'This will be summary of each'},
    {name: 'Brew Daddy', type: 'personal', img:'Image or logo', link:'this will be the link', content:'This will be summary of each'},
    {name: 'GnarShare', type: 'personal', img:'Image or logo', link:'this will be the link', content:'This will be summary of each'},
    {name: 'Workout', type: 'personal', img:'Image or logo', link:'this will be the link', content:'This will be summary of each'},
  ];
  const [filteredData, setFilteredData] = useState(data);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  
  const handleFilterPro = () => {
    // Filter logic goes here
    const newData = data.filter(item => item.type === 'pro');
    setFilteredData(newData);
  }
  
  const handleFilterPersonal = () => {
    // Filter logic goes here
    const newData = data.filter(item => item.type === 'personal');
    setFilteredData(newData);
  }

  const handleShowAll = () => {
    setFilteredData(data);
  }

  const handleOpenModal = (item) => {
    setModalOpen(true);
    setSelectedItem(item);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <JobsContainer >
      <JobsNav>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleFilterPro}>Pro</button>
        <button onClick={handleFilterPersonal}>Personal</button>
      </JobsNav>
      <ExpContainer dataLength={filteredData.length}>
      {filteredData.map(item => (
        <ExpCard key={item.name} onClick={() => handleOpenModal(item)}>
          <CardImage style={{width:'20px;'}} src={item.img}/>
        </ExpCard>
      ))}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={true}
          style={{
                  overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                  },
                  content: {
                    border: '1px solid rgba(255, 255, 255, 0.0)',
                    background: 'rgba(255, 255, 255, 0.0)',
                    WebkitOverflowScrolling: 'none',
                  }
                }}
      >
        <ContainterModal>
          <ContainerTopBarModal>
            <div style={{flexDirection:'column-reverse'}}>
              <button onClick={handleCloseModal}>X</button>
            </div>
          </ContainerTopBarModal>
          <ContentContainer>
            <ModalContent>
              <div>
                <img src={selectedItem.img}/>
                <p  style={{color:'red'}}>Type: {selectedItem.type}</p>
              </div>
              <div>
                <h2 style={{color:'red'}}>{selectedItem.name}</h2>
                <p  style={{color:'red'}}>Type: {selectedItem.content}</p>
                <p  style={{color:'red'}}>Type: {selectedItem.link}</p>
              </div>
            </ModalContent>
          </ContentContainer>
        </ContainterModal>
      </Modal>
      </ExpContainer>
    </JobsContainer >
  );
}

const JobsContainer = styled.div`
  display:flex;
  margin-top: 10px;
  margin-right: 5%;
  margin-left: 5%;
  height: 200px;
  border-radius: 20px 20px 20px 20px;
  justify-content:space-around;
  align-items:center;
  margin-bottom:15%;
`

const JobsNav = styled.div`
  display:flex;
  flex-direction:column;
`
const ExpContainer = styled.div`
display: grid;
grid-template-columns: ${props => props.dataLength > 4 ? 'repeat(4, 1fr)' : 'repeat(4, 1fr)'};
margin-top: 10px;
margin-right: 5%;
margin-left: 5%;
height: 200px;
border-radius: 20px 20px 20px 20px;
`

const shadowPulse = keyframes`
  0% { box-shadow: rgba(240, 46, 170, 0.4) 0px 0px, rgba(240, 46, 170, 0.3) 5px 5px, rgba(240, 46, 170, 0.2) 10px 10px, rgba(240, 46, 170, 0.1) 15px 15px, rgba(240, 46, 170, 0.05) 20px 20px;    ; }
  100% {box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }
`;


const ExpCard = styled.div`
  height: 50px;
  margin-bottom: 105px;
  overflow: hidden;
  text-align:center;
  color:#FFFFFF;
  padding:30px;
  background: linear-gradient(0.25turn, #e555ac,#c481f3);;
  margin: 20px;
  border-radius:20px;
  &:hover {
    animation: ${shadowPulse} 1s ease-in-out infinite;
  }
  flex: 1 0 calc(50% - 20px);
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ModalContent = styled.div`
  display:flex;
  justify-content: space-around;
`

const ContainterModal = styled.div`
  margin-right: 5%;
  margin-left: 5%;
  background: silver;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
  padding: 3px;
  justify-content:center;
  display:flex;
  flex-direction:column;
  align-content: center;
  align-self: center;
`
const ContainerTopBarModal = styled.div`
  display:flex;
  justify-content:end;
  background: linear-gradient(90deg,navy,#1084d0);
  padding: 3px 2px 3px 3px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0;
`
const ContentContainer = styled.div`
  margin:5px;
  background:#000000;
  text-align: center;
  display:flex;
  justify-content:center;
  padding:20px;
`


export default JobLogos