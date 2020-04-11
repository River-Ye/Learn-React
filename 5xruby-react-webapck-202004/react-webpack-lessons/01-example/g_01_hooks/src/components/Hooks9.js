import React, { useState, useEffect, useCallback } from 'react';
import axios, { CancelToken } from 'axios';
import classnames from 'classnames';


class DataFetchComponent extends React.Component {
  state = { isLoading: true, lists: [] }

  componentDidMount() {
    axios.get('/api/list/all?delay=1000', {
      cancelToken: new CancelToken(((c) => {
        this.cancel = c;
      })),
    }).then(({ data }) => {
      this.setState({
        isLoading: false,
        lists: data,
      });
    }).catch((error) => {
      // cancel 時會觸發 Promise reject
      console.log(axios.isCancel(error));
      console.error(error);
    });
  }

  componentWillUnmount() {
    this.cancel('DataFetchComponent 這裡可以寫客製化訊息，user cancel');
  }

  render() {
    const { isLoading, lists } = this.state;
    const eleClass = classnames('loading-container', { loading: isLoading });
    return (
      <section className={eleClass}>
        <h3>DataFetchComponent</h3>
        { isLoading && <p>Loading</p> }
        { lists.map((post) => <div key={post.id}>{post.text}</div>) }
      </section>
    );
  }
}


const useFetchList = () => {
  const [isLoading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    let cancel = null;
    axios.get('/api/list/all?delay=1500', {
      cancelToken: new CancelToken(((c) => {
        cancel = c;
      })),
    }).then(({ data }) => {
      setLoading(false);
      setLists(data);
    }).catch((error) => {
      // 可以用 axios.isCancel 來判斷是不是 cancel 發生的 reject
      console.log(axios.isCancel(error));
      console.error(error);
    });
    return () => {
      // cancel 時會觸發 Promise reject
      cancel('useFetch 這裡可以寫客製化訊息，user cancel');
    };
  });
  return { isLoading, lists };
};

const DataFetchStatelessComponent = () => {
  const { isLoading, lists } = useFetchList();
  const eleClass = classnames('loading-container', { loading: isLoading });
  return (
    <section className={eleClass}>
      <h3>DataFetchStatelessComponent</h3>
      { isLoading && <p>Loading</p> }
      { lists.map((post) => <div key={post.id}>{post.text}</div>) }
    </section>
  );
};

export default function Hooks9() {
  const [show, setShow] = useState(true);
  const toggleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);
  return (
    <section data-name="Hooks9">
      <p>show: {`${show}`}</p>
      { show && <DataFetchComponent /> }
      { show && <DataFetchStatelessComponent /> }
      <button onClick={toggleShow}>toggle show</button>
    </section>
  );
}
