/* eslint-disable  */
import React from "react";

function Donate() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">To support our work:</h2>
      <h3 className="text-xl font-bold mb-2">Donate from India</h3>
      <ul className="list-disc pl-6 mb-4">
        <a href="/home/sponsor">
          <li>Sponsor an individual animal</li>
        </a>
        <li>Amazon Wishlist</li>
        <li>Support from outside India</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Your money will go towards:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Managing this website</li>
        <li>Medicines, and medical checkups for animals</li>
        <li>Food for animals</li>
        <li>Transportation expenses for animal rescues</li>
        <li>Vet and animal welfare staff salaries</li>
      </ul>
      <p className="mb-4">
        Donations made to StrayCare Connect can be claimed as a deduction under
        Section 80G of the Income Tax Act.
      </p>
      <p className="mb-4">Fill this form to get the receipt.</p>

      <h3 className="text-xl font-bold mb-2">1) Bank transfer:</h3>
      <p className="mb-4">
        Bank Name: Bhargab Bank Ltd. <br />
        Account Name: StrayCare Connect <br />
        Account Number: 918020102382794 <br />
        Account type: Current <br />
        IFS Code: UTIB0000250
      </p>

      <h3 className="text-xl font-bold mb-2">
        2) By Indian credit or debit card:
      </h3>
      <div className="flex flex-col mb-4">
        <label htmlFor="cardAmount" className="mb-1">
          Amount: ₹
        </label>
        <input
          id="cardAmount"
          type="text"
          className="border border-gray-300 rounded px-4 py-2 mb-2"
          placeholder="Enter Amount"
        />
        <label htmlFor="cardPAN" className="mb-1">
          PAN / Aadhar Card:
        </label>
        <input
          id="cardPAN"
          type="text"
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Enter PAN/Aadhaar Card Number"
        />
      </div>

      <h3 className="text-xl font-bold mb-2">3) GPay/PayTM/UPI</h3>
      <p className="mb-4">
        GPay/PayTM: +91 99994 29144 <br />
        UPI ID: 9999429144@okbizaxis
      </p>

      <h3 className="text-xl font-bold mb-2">4) Monthly Recurring Donation</h3>
      <div className="flex flex-col mb-4">
        <label htmlFor="recurringAmount" className="mb-1">
          Amount: ₹
        </label>
        <input
          id="recurringAmount"
          type="text"
          className="border border-gray-300 rounded px-4 py-2 mb-2"
          placeholder="Enter Amount"
        />
        <p>Support our work from outside India</p>
      </div>

      <h3 className="text-xl font-bold mb-2">
        Peepal Farm can not accept donations from outside India.
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Join us on Patreon or YouTube or Facebook</li>
        <li>Buy exclusive royalty-free Animal Photos Set (Pay as you want)</li>
        <li>
          Buy exclusive royalty-free Animal Photos Set (Pay as you want)
          Subscription
        </li>
      </ul>
    </div>
  );
}

export default Donate;
