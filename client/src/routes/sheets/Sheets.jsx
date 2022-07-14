import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { Route, Routes, useParams, Navigate } from 'react-router-dom';
import { SheetProvider } from '../../_context/SheetProvider'
import { GlobalContext } from '../../_context/AppProvider'
import { SheetContext } from '../../_context/SheetProvider';
import { Div } from '../../_styles/_global'
import Loader from '../../_components/Loader'
import dummyData from '../../_dummy/sheet.json';
import dummyData2 from '../../_dummy/sheet2.json';
import SheetDisplay from  '../../_components/SheetDisplay';
import UserDisplay from './users/UserDisplay';
// import SheetEdit from './SheetEdit';
import Sidebar from '../../_components/Sidebar';
import "../../_styles/sheets.css";
import { UserAccessProvider } from '../../_context/UserAccessProvider';
import SheetModify from './create-edit/SheetModify';

const Sheets = () => {

  const NotFound = lazy(() => import('../NotFound'));

  return (
    <div className='sheet-page no-select'>
        <Routes>
          <Route path='/' element={ <SheetDisplay/> } />
            <Route path='/users/*' element={ <Suspense fallback={<Loader/>}><UserAccessProvider><UserDisplay/></UserAccessProvider></Suspense> } />
            <Route path='/edit/*' element={ <Suspense fallback={<Loader/>}><SheetModify/></Suspense> } />
            <Route path='/:entryId' element={ <Suspense fallback={<Loader/>}><SheetDisplay/></Suspense> } />
            <Route path='/:entryId/*' element={ <Suspense fallback={<Loader/>}><Loader/><Navigate to={`/sheet/${location.pathname.split('/')[2]}`} /></Suspense> } />
          <Route path="/*" element={ <NotFound /> } />
        </Routes>
    </div>
  );
}

const Page = () => {
  // const { store } = useContext(GlobalContext)
  // const { theme, isAuth, setIsAuth } = store

  // const { sheet } = useContext(SheetContext);

  // const { sheetId } = useParams();

  // useEffect(() => {
  //   // get user's sheets here
  //   if (sheetId === '1') {
  //     sheet.setCurrentSheet(dummyData);
  //   }
  //   if (sheetId === '100') {
  //     sheet.setCurrentSheet(dummyData2);
  //   }
  // }, [sheetId])

  // useEffect(() => {
  //   api(['get', 'sheet/${sheetId}'], noCallback) // Usage: api([method, path, payload], callback)
  //     .then(res => setCurrentSheet(res))
  //     .catch(err => console.log(err))
  // }, [])
  
  return (
    <>
        <SheetDisplay/>
        {/* {sheet.sheetPageView === 'sheet' ? <SheetDisplay/> : <></>}
        {sheet.sheetPageView === 'users' ? <UserDisplay/> : <></>} */}
    </>
  )
}

{/* <button name="get" onClick={() => setIsAuth(!isAuth)}>{ isAuth ? <>Authenticated ✅</> : <>Not Authenticated ❌</> }</button> */}

    // <Div id='page' className={theme} flex column fills center centertext>
    //   <Div flex column centerchildren centertext>
    //     <h1>sheets</h1>
    //     <SheetDisplay />
    //   </Div>
    // </Div>

export default Sheets;