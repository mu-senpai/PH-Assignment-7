import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { getEmail, vacantInput } from './utilities/utilities';
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Toggle from './components/Toggle/Toggle'
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  const [balance, setBalance] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [email, setEmail] = useState('');

  const scrollToComponent = () => {
    scroll.scrollTo(document.querySelector("section").offsetTop, {
      duration: 800,
      smooth: 'easeInOutQuad'
    });
  };

  const handleEmail = (id) => {
    const updatedEmail = getEmail(id);

    if (updatedEmail) {
      if (email) {
        if (email === updatedEmail) {
          vacantInput(id);
          toast.error("You've already subscribed with this email.", {
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
            vacantInput(id);
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
          vacantInput(id);
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
    } else {
      return;
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
      const getEmail = localStorage.getItem('userEmail');
      setEmail(getEmail);
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
      <Banner handleAddCredit={handleAddCredit}></Banner>
      <section></section>
      <Toggle selectedPlayers={selectedPlayers} handlePurchase={handlePurchase} handleRemove={handleRemove} scrollToComponent={scrollToComponent}></Toggle>
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