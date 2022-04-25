import React from 'react'
import { Book } from 'react-feather'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'

const Diary = () => {
  return (
    <Main>
        <section className='diary'>
            <Header icon={<Book />} />
        </section>
    </Main>
  )
}

export default Diary