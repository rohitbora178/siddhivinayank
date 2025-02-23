import React, { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r  from-blue-400 via-blue-300 to-green-200 py-12 px-6" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-orange-600" data-aos="fade-up">
          आमच्या विषयी
        </h2>

        {/* Card for "वाचनालय आणि स्पर्धा परीक्षा मार्गदर्शन केंद्र" */}
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">वाचनालय आणि स्पर्धा परीक्षा मार्गदर्शन केंद्र</h3>
            <p className="mt-4 text-gray-600">
              आमच्या वाचनालयामध्ये विविध स्पर्धा परीक्षांसाठी आवश्यक असलेल्या पुस्तकांची विस्तृत संग्रह उपलब्ध आहे. यामध्ये MPSE, UPSC, पोलिस भरती, आणि इतर स्पर्धा परीक्षांसाठी आवश्यक असलेल्या पुस्तकांचा समावेश आहे.
            </p>
          </div>

          {/* Card for "वसुंधरा अभियान" */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up" data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">वसुंधरा अभियान</h3>
            <p className="mt-4 text-gray-600">
              सिद्धिविनायक मंच एक सामाजिक जबाबदारी म्हणून वसुंधरा अभियान राबवत आहे. यामध्ये आम्ही पर्यावरणाची देखभाल आणि वृक्षारोपणाला महत्त्व देत आहोत. आमचं लक्ष्य १००० झाडांची लागवड करणे आहे.
            </p>
          </div>
        </div>

        {/* Card for "सामाजिक कार्यक्रम आणि फ्री इंग्रजी स्पीकिंग क्लासेस" */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up" data-aos-delay="400"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">सामाजिक कार्यक्रम आणि फ्री इंग्रजी स्पीकिंग क्लासेस</h3>
            <p className="mt-4 text-gray-600">
              सिद्धिविनायक मंच फक्त शैक्षणिकदृष्ट्याच नाही तर सामाजिकदृष्ट्या देखील सक्रिय आहे. आम्ही समाजातील गरजू लोकांसाठी विविध कार्यक्रम आयोजित करतो. ह्या वर्गांमध्ये विद्यार्थ्यांना इंग्रजी बोलण्याची आणि लिहिण्याची कौशल्ये शिकवली जातात.
            </p>
          </div>

          {/* Card for "आम्ही आमच्या उद्दिष्टे साध्य करण्यासाठी कटिबद्ध आहोत" */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up" data-aos-delay="600"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">आम्ही आमच्या उद्दिष्टे साध्य करण्यासाठी कटिबद्ध आहोत</h3>
            <p className="mt-4 text-gray-600">
              आम्ही यापुढेही विद्यार्थ्यांच्या सर्वांगीण विकासासाठी काम करत राहू. सिद्धिविनायक मंच नेहमीच शिक्षण, पर्यावरण आणि समाजसेवेसाठी एक वचनबद्ध संस्था राहील.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
