// import React from 'react'

// const Extra = () => {
//   return (
//     <div className=" bg-white p-8">
//     {/* <h2 className=" text-2xl font-bold uppercase text-gray-900  underline">
//       {btnContent}
//     </h2> */}
//     {isLoading ? (
//       <p>loading...</p>
//     ) : (
//       Diseases?.map((item) => {
//         return (
//           <div className="" key={item.id}>
//             <div className="collapse collapse-arrow bg-base-200">
//               <input type="radio" name="my-accordion-2" />
//               <div className="collapse-title text-xl font-medium">
//                 <h2 className="text-xl font-bold">{item.name}</h2>
//               </div>
//               <div className="collapse-content">
//                 {/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}

//                 {/* Tabs start here */}
//                 <div role="tablist" className="tabs tabs-lifted">
//                   {/* Overview Tab */}
//                   <input
//                     type="radio"
//                     name="my_tabs_2"
//                     role="tab"
//                     className="tab"
//                     aria-label="Overview"
//                     checked
//                   />
//                   <div
//                     role="tabpanel"
//                     aria-label="Symptoms"
//                     className="tab-content rounded-box border-red-300 bg-base-100 p-6"
//                     dangerouslySetInnerHTML={{ __html: item.overview }}
//                   />

//                   {/* Symptoms Tab */}
//                   <input
//                     type="radio"
//                     name="my_tabs_2"
//                     role="tab"
//                     className="tab"
//                     aria-label="Symptoms"
//                   />
//                   <div
//                     role="tabpanel"
//                     className="tab-content rounded-box border-red-300 bg-base-100 p-6"
//                     dangerouslySetInnerHTML={{ __html: item.symptoms }}
//                   />

//                   {/* Causes Tab */}
//                   <input
//                     type="radio"
//                     name="my_tabs_2"
//                     role="tab"
//                     className="tab"
//                     aria-label="Causes"
//                   />
//                   <div
//                     role="tabpanel"
//                     className="tab-content rounded-box border-red-300 bg-base-100 p-6"
//                     dangerouslySetInnerHTML={{ __html: item.causes }}
//                   />

//                   {/* Prevention Tab */}
//                   <input
//                     type="radio"
//                     name="my_tabs_2"
//                     role="tab"
//                     className="tab"
//                     aria-label="Prevention"
//                   />
//                   <div
//                     role="tabpanel"
//                     className="tab-content rounded-box border-red-300 bg-base-100 p-6"
//                     dangerouslySetInnerHTML={{ __html: item.prevention }}
//                   />

//                   {/* Treatment Tab  */}
//                   <input
//                     type="radio"
//                     name="my_tabs_2"
//                     role="tab"
//                     className="tab"
//                     aria-label="Treatment"
//                   />
//                   <div
//                     role="tabpanel"
//                     className="tab-content rounded-box border-red-300 bg-base-100 p-6"
//                     dangerouslySetInnerHTML={{ __html: item.treatment }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })
//     )}
//   </div>
//   )
// }

// export default Extra
