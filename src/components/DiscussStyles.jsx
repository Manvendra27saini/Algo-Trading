import React from 'react';

const DiscussStyles = () => (
  <style jsx>{`
    .discuss-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .discuss-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .discuss-newQuestion {
      margin-bottom: 20px;
    }
    .discuss-textarea {
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
      color: #000; /* Ensure text is visible */
      background-color: #fff; /* Ensure background is white */
    }
    .discuss-submitButton {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .discuss-questionContainer {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      position: relative;
      background-color: #fff; /* Ensure background is white */
    }
    .discuss-question {
      font-size: 18px;
      font-weight: bold;
      color: #000; /* Ensure text is visible */
    }
    .discuss-replies {
      margin-top: 10px;
    }
    .discuss-reply {
      margin-top: 10px;
      padding-left: 10px;
      border-left: 2px solid #007bff;
      position: relative;
      color: #000; /* Ensure text is visible */
    }
    .discuss-replyContainer {
      margin-top: 20px;
    }
    .discuss-replyButton {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #28a745;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .discuss-buttonContainer {
      position: absolute;
      top: 10px;
      right: 10px;
      display: none;
      gap: 10px;
    }
    .discuss-editButton {
      padding: 5px 10px;
      background-color: #ffc107;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .discuss-deleteButton {
      padding: 5px 10px;
      background-color: #dc3545;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .discuss-saveButton {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #17a2b8;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .discuss-threeDots {
      position: absolute;
      top: 0px; /* Adjusted to ensure alignment at the top */
      right: 10px;
      cursor: pointer;
      color: #000; /* Ensure three dots are black */
    }
    .discuss-reply .discuss-threeDots {
      top: -5px; /* Adjusted to ensure alignment at the top for replies */
    }
    .discuss-threeDots:hover + .discuss-buttonContainer,
    .discuss-buttonContainer:hover {
      display: flex;
    }
    .discuss-showMoreButton {
      margin-top: 0px;
      padding: 0px 1px;
      background-color: #6c757d;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  `}</style>
);

export default DiscussStyles;