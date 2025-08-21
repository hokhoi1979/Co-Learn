import React from "react";
import { BookOpen, Heart } from "lucide-react";
function Footer() {
  return (
    <div className="bg-[#252525] text-white p-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4 px-30 ">
        <div>
          <div className="flex items-center ">
            <BookOpen className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">GoldLearns</span>
          </div>
          <p className="mt-4 w-60 text-gray-400 text-sm leading-relaxed">
            Empowering children to reach their full potential through
            innovative, engaging educational experiences.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-500">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Curriculum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Progress Tracking
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-500">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Parent Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Community
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 GoldLearns. All rights reserved. Made with{" "}
        <Heart className="inline-block w-4 h-4 text-red-500 mx-1" /> for
        children's education.
      </div>
    </div>
  );
}

export default Footer;
