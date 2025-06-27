import React, { useState } from "react";
import { Trash2, MessageCircle, Search, RefreshCw } from "lucide-react";

const mockReviews = [
  {
    id: "1",
    product: "Pinapple Bamboo Lamp",
    buyer: "Amit Sharma",
    rating: 5,
    comment: "Amazing quality! Highly recommend.",
    date: "2025-06-25",
    reply: "",
  },
  {
    id: "2",
    product: "Bamboo Earring Set",
    buyer: "Priya Singh",
    rating: 4,
    comment: "Very nice, but delivery was slow.",
    date: "2025-06-24",
    reply: "",
  },
  {
    id: "3",
    product: "Landloom Saree",
    buyer: "Rahul Verma",
    rating: 3,
    comment: "Good, but expected better packaging.",
    date: "2025-06-23",
    reply: "Thank you for your feedback!",
  },
  {
    id: "4",
    product: "Handcrafted Vase",
    buyer: "Sneha Reddy",
    rating: 5,
    comment: "Beautiful vase, looks great in my living room!",
    date: "2025-06-22",
    reply: "",
  },
  {
    id: "5",
    product: "Bamboo Basket",
    buyer: "Vikram Patel",
    rating: 4,
    comment: "Sturdy and well made. Will buy again.",
    date: "2025-06-21",
    reply: "",
  },
  {
    id: "6",
    product: "Textile Wall Hanging",
    buyer: "Meera Sharma",
    rating: 5,
    comment: "Absolutely love the colors and design!",
    date: "2025-06-20",
    reply: "",
  },
  {
    id: "7",
    product: "Bamboo Pen Stand",
    buyer: "Arjun Mehta",
    rating: 4,
    comment: "Useful and eco-friendly. Arrived on time.",
    date: "2025-06-19",
    reply: "",
  },
  {
    id: "8",
    product: "Jewelry Box",
    buyer: "Sanjay Patel",
    rating: 5,
    comment: "Perfect for my collection. Great craftsmanship!",
    date: "2025-06-18",
    reply: "",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(mockReviews);
  const [replyingId, setReplyingId] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories from reviews
  const categories = [
    ...new Set(reviews.map((r) => r.product.split(" ")[0]).filter(Boolean)),
  ];

  const handleRemove = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const handleReply = (id) => {
    setReviews(
      reviews.map((r) => (r.id === id ? { ...r, reply: replyText } : r))
    );
    setReplyingId(null);
    setReplyText("");
  };

  // Filter reviews by search and category
  const filteredReviews = reviews.filter(
    (review) =>
      review.product.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || review.product.startsWith(selectedCategory))
  );

  // Simulate refresh (reset to mock data)
  const handleRefresh = () => {
    setReviews([...mockReviews]);
  };

  return (
    <div className="p-6 w-[90%] max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Product Reviews</h2>
        <button
          onClick={handleRefresh}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search product names..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto w-full">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Product
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Buyer
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Rating
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Comment
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Reply
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredReviews.map((review) => (
              <tr key={review.id} className="text-gray-800">
                <td className="px-4 py-3">{review.product}</td>
                <td className="px-4 py-3">{review.buyer}</td>
                <td className="px-4 py-3">
                  {"★".repeat(review.rating)}
                  <span className="text-gray-400">
                    {"★".repeat(5 - review.rating)}
                  </span>
                </td>
                <td className="px-4 py-3 max-w-xs whitespace-pre-line">
                  {review.comment}
                </td>
                <td className="px-4 py-3">{review.date}</td>
                <td className="px-4 py-3">
                  {replyingId === review.id ? (
                    <div className="flex flex-col gap-2">
                      <textarea
                        className="border rounded p-2 text-sm"
                        rows={2}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply..."
                      />
                      <div className="flex gap-2">
                        <button
                          className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
                          onClick={() => handleReply(review.id)}
                        >
                          Send
                        </button>
                        <button
                          className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs"
                          onClick={() => setReplyingId(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : review.reply ? (
                    <span className="text-green-700 text-sm">
                      {review.reply}
                    </span>
                  ) : (
                    <button
                      className="flex items-center text-blue-600 hover:underline text-xs"
                      onClick={() => {
                        setReplyingId(review.id);
                        setReplyText("");
                      }}
                    >
                      <MessageCircle size={14} className="mr-1" /> Reply
                    </button>
                  )}
                </td>
                <td className="px-4 py-3">
                  <button
                    className="text-red-600 hover:text-red-800 flex items-center"
                    onClick={() => handleRemove(review.id)}
                  >
                    <Trash2 size={16} className="mr-1" /> Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
