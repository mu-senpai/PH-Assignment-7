import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Toggle from './components/Toggle/Toggle'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Footer from './components/Footer/Footer';
import { getEmail, vacantInput } from './utilities/utilities';

function App() {

  const [balance, setBalance] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [email, setEmail] = useState('');

  const handleEmail = (id) => {
    const updatedEmail = getEmail(id);

    if (email) {
      if (updatedEmail.includes('@')) {
        setEmail(updatedEmail);
        localStorage.setItem('userEmail', updatedEmail);
        vacantInput(id);
        toast.success(`You subscription email is changed to ${updatedEmail}.`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Invalid email.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      if (updatedEmail.includes('@')) {
        setEmail(updatedEmail);
        localStorage.setItem('userEmail', updatedEmail);
        vacantInput(id);
        toast.success(`Subscription process has completed! You'll get latest news on ${updatedEmail}. Stay tuned!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Invalid email.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

  }

  useEffect(() => {
    if (localStorage.getItem('balance')) {
      const updatedBalance = JSON.parse(localStorage.getItem('balance'));
      setBalance(updatedBalance);
    } else {
      setBalance(0);
    }
  }, [balance])

  useEffect(() => {
    if (localStorage.getItem('userEmail')) {
      const getEmail = localStorage.getItem('userEmail')
      toast.info(`Welcome to BPL DREAM 11! Subscription Email: ${getEmail}.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (localStorage.getItem('selectedPlayersInfo')) {
      const getSelectedPlayers = JSON.parse(localStorage.getItem('selectedPlayersInfo'));
      let updatedSelectedPlayers = [];
      updatedSelectedPlayers = getSelectedPlayers.map(player => player);
      setSelectedPlayers(updatedSelectedPlayers);
    } else {
      setSelectedPlayers([]);
    }
  }, [])

  const handleAddCredit = () => {
    const updatedBalance = balance + 800000;
    setBalance(updatedBalance);
    localStorage.setItem('balance', updatedBalance);
    toast.success("$800000 has added to your balance successfully.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleBalance = (price) => {
      const updatedBalance = balance - price;
      setBalance(updatedBalance);
      localStorage.setItem('balance', updatedBalance);
  }

  const handlePurchase = (player) => {
    if (selectedPlayers.includes(player)) {
      toast.error("The player has already been selected.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (selectedPlayers.length >= 6) {
      toast.error("Maximum player limit has reached.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (balance < player.price) {
        toast.error("You have insufficient balance.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const updatedSelectedPlayers = [...selectedPlayers, player];
        setSelectedPlayers(updatedSelectedPlayers);
        localStorage.setItem('selectedPlayersInfo', JSON.stringify(updatedSelectedPlayers));
        handleBalance(player.price);
        toast.success(`You have successfully purchased ${player.name}.`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  const handleRemove = (player) => {
    const updatedSelectedPlayers = selectedPlayers.filter(select => select.id != player.id);
    setSelectedPlayers(updatedSelectedPlayers);
    localStorage.setItem('selectedPlayersInfo', JSON.stringify(updatedSelectedPlayers));
    const updatedBalance = balance + player.price;
    setBalance(updatedBalance);
    localStorage.setItem('balance', updatedBalance);
    toast.error(`${player.name} has been removed from your list.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className='w-full relative'>
      <Navbar balance={balance}></Navbar>
      <div className='max-w-[95%] sm:max-w-[90%] lg:max-w-[81.25%] min-[1920px]:max-w-[97.5rem] mx-auto'>
        <Banner handleAddCredit={handleAddCredit}></Banner>
        <Toggle selectedPlayers={selectedPlayers} handlePurchase={handlePurchase} handleRemove={handleRemove}></Toggle>
      </div>
      <Footer handleEmail={handleEmail}></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App