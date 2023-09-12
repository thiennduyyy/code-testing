
import './App.css';
import { useEffect, useState } from 'react'
import Content from './components/Content';

function App() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [amount, setAmount] = useState(20)
  function loadMore(){
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.scrollingElement.scrollHeight && search === '') {
      setAmount(prev => (prev + 20))
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', loadMore)
    return () => window.removeEventListener('scroll', loadMore)
  }, [amount])
  useEffect(() => {
    let fetchLink = search === '' ? `https://dummyjson.com/products?limit=${amount}&select=title,price,description,brand,thumbnail` : `https://dummyjson.com/products/search?q=${search}&select=title,price,description,brand,thumbnail`
    fetch(fetchLink)
    .then(res => res.json())
    .then(res => {
      setProducts(res.products)
    })
  }, [amount, search])
  return (
    <div className="App">
      <div className='flex w-1/5 fixed top-0 left-2 mt-5'>
        <p className='my-auto'>Search: </p>
        <input className='h-10 border-solid border-black border-2 rounded-lg mx-auto flex-1 ml-5 px-2 focus:outline-none' 
          placeholder='Search here ...' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}></input>
      </div>
      <Content products={products}/>
    </div>
  );
}

export default App;
