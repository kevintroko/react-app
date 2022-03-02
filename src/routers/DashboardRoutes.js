import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DCScreen } from '../components/dc/DCScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar></Navbar>

        <div className='container mt-2'>
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DCScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="hero/:heroId" element={<HeroScreen />} />
              
              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
