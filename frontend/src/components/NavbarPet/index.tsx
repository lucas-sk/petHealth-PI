import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import arrow from '../../assets/img/arrow-left.svg'


export function NavbarPet() {
  return (
    <Disclosure as="nav" className="bg-white drop-shadow-md fixed top-0 left-0 right-0 z-10 flex items-center">
      <Link to="/perfil"><img src={arrow} alt="" /></Link>
      <h1 className="font-semibold text-2xl py-5 mx-auto">MEUS PETS</h1>
    </Disclosure>
  )
}