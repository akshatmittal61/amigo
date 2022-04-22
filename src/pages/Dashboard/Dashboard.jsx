import React,{useContext} from 'react'
import { Home } from 'react-feather'
import GlobalContext from '../../Context/GlobalContext'

const Dashboard = () => {
    const {user}=useContext(GlobalContext)
  return (
    <main className='main'>
        <div className='main-cover'></div>
        <div className='main-container'>
            <section className='dashboard'>
                <div className='dashboard-head'>
                    <div className='dashboard-head-nav'>
                        <div className='dashboard-head-nav__icon'>
                            <Home />
                        </div>
                        <div className='dashboard-head-nav__path'>
                            /
                        </div>
                    </div>
                    <div className='dashboard-head-user'>
                        <div className='dashboard-head-user__img'>
                            <img src={user.avatar} alt={user.name} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Dashboard