import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function App() {
  return (
    <div className='flex justify-center mt-40'>
      <div className='w-96 h-full mt-4'>
        <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/31/1051184/Real-Madrid-Ucl-2022.jpg" alt="" />
      </div>
    <div className=" w-96 ml-7">
      <h1 className='text-2xl font-bold'>Login</h1>
             <div className="sm:col-span-4 mt-8">
              <label htmlFor="email" className="font-bold  block text-sm font-medium leading-6 text-gray-900">
                E-Mail
              </label>
              <div className="mt-2">
                <input
                  placeholder="Placeholder content"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Passwword
              </label>
              <div className="mt-2">
                <input
                placeholder="Placeholder content"
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
                <p className="font-bold ml-4 pl-52 mt-2.5">Forgot passwword?</p>
                <Button className='w-96 mt-2.5' variant="primary">Login</Button>{' '}

                <div className="flex items-center justify-center mt-6">
              <div className="border-b border-gray-300 w-full"></div>
              <span className="px-4 text-gray-500 font-light text-xs">or</span>
              <div className="border-b border-gray-300 w-full"></div>
            </div>
            </div>
            <Button className='w-96 mt-2' variant="outline-dark">Register now</Button>
          

    </div>
    </div>
  )
}
