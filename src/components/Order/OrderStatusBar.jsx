import React from "react";
import { FaCog, FaTruck, FaShippingFast, FaCheckCircle } from "react-icons/fa";

const steps = [
  { label: "Processing", icon: <FaCog /> },
  { label: "Shipped", icon: <FaTruck /> },
  { label: "Out for Delivery", icon: <FaShippingFast /> },
  { label: "Delivered", icon: <FaCheckCircle /> },
];

const statusIndex = (status) => {
  switch (status) {
    case "Processing":
      return 0;
    case "Shipped":
      return 1;
    case "Out for Delivery":
      return 2;
    case "Delivered":
      return 3;
    default:
      return 0;
  }
};

export default function OrderStatusBar({ status }) {
  const currentStep = statusIndex(status);
  return (
    <div className="flex items-center justify-center gap-8 mb-8">
      {steps.map((step, idx) => (
        <React.Fragment key={step.label}>
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full border-4 transition-all duration-300
                ${
                  idx === currentStep
                    ? "bg-orange-400 border-orange-400 text-white shadow-lg"
                    : "bg-gray-100 border-gray-200 text-gray-400"
                }
              `}
            >
              <span className="text-2xl">{step.icon}</span>
            </div>
            <span
              className={`mt-2 text-sm font-medium transition-colors duration-300
                ${idx === currentStep ? "text-orange-600" : "text-gray-400"}
              `}
            >
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={`w-16 h-1 rounded transition-all duration-300
                ${idx < currentStep ? "bg-orange-400" : "bg-gray-200"}
              `}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
