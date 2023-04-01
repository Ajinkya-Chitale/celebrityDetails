import './App.css'
import Search from './assets/controls/Search';
import CelebrityBox from './assets/components/CelebrityBox';
import NoDataFound from './assets/components/NoDataFound';
import { useEffect, useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState({});
  const [isdisabled, setIsDisabled] = useState(true);
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const options = {
      method: 'GET',
      contentType: 'application/json',
      headers: {
        'X-Api-Key': 'IkMxlSb72RQhgQJ97fNcXw==mx6DpkgQyh7S1WPO',
      }
    }

    fetch(`https://api.api-ninjas.com/v1/celebrity?name=${searchText}`, options)
      .then(response => response.json())
      .then(data => {
        setApiData(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [searchText])

  const getSearchText = (searchText) => {
    setSearchText(searchText);
  }

  return (
    <div className='container'>
      <Search getSearchText={getSearchText} disabled={isdisabled} />
      {apiData.length === 0 ?
        <NoDataFound /> :
        <div className="d-flex gap-3 flex-wrap">
          <CelebrityBox apiData={apiData} />
        </div>
      }
    </div>
  )
}

export default App;
