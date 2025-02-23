import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-300 to-green-200 flex flex-col justify-center items-center text-white p-6">
      <div className="max-w-lg w-full bg-white bg-opacity-50 rounded-lg shadow-xl p-6">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">संपर्क साधा</h2>
        <p className="text-lg mb-6 text-gray-800 text-center">
          आमच्याशी संपर्क साधण्यासाठी, खालील माहितीचा वापर करा. आम्ही तुमच्या सर्व विचारांना प्रतिसाद देण्यासाठी तयार आहोत.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">सिद्धिविनायक मंच , बेलापूर</h3>
            <p className="text-gray-800">वाचनालय स्पर्धा परिक्षा मार्गदर्शन केंद्र</p>
            <p className="text-gray-800">वसुंधरा अभियान</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">संपर्क क्रमांक</h3>
            <p className="text-gray-800">मोबाइल: 1111111111</p>
          </div>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-800" htmlFor="name">
                तुमचं नाव
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md border border-gray-300"
                placeholder="तुमचं नाव"
              />
            </div>
            <div>
              <label className="block text-gray-800" htmlFor="email">
                तुमचं ईमेल
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md border border-gray-300"
                placeholder="तुमचं ईमेल"
              />
            </div>
            <div>
              <label className="block text-gray-800" htmlFor="message">
                संदेश
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded-md border border-gray-300"
                rows="4"
                placeholder="तुम्हाला काय विचारायचं आहे?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
            >
              संदेश पाठवा
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
