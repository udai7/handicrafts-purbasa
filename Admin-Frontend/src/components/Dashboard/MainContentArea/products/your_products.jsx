import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  ImageOff,
  Loader2,
  Edit,
  Trash2,
  Tag,
  Package,
  Search,
  RefreshCw,
  MoreVertical,
} from "lucide-react";
import { AdminContext } from "../../../../utils/admin_context";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import EditProduct from "./edit_product";
import StockBadge from "./stockbadge";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const { admin } = useContext(AdminContext);
  const [editingProduct, setEditingProduct] = useState(null);
  const link = import.meta.env.VITE_BACKEND_LINK;
  const [hostedProducts, setHostedProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${link}/api/admin/products/get`, {
        params: {
          adminId: admin?.id,
        },
      });
      setProducts(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to load products. Please try again.");
      toast.error("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (admin?.id) {
      fetchProducts();
    }
  }, [admin?.id]);

  const deleteProduct = async (id) => {
    if (!id) return;

    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await axios.delete(
          `${link}/api/admin/products/delete/${id}`
        );
        if (response.status === 200) {
          setProducts(products.filter((product) => product._id !== id));
          toast.success("Product deleted successfully");
        }
      } catch (err) {
        console.error("Failed to delete product:", err);
        toast.error("Failed to delete product. Please try again.");
      }
    }
  };

  const handleProductUpdate = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  const categories = [
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];

  const filteredProducts = products
    .filter(
      (product) =>
        (product.title?.toLowerCase() || "").includes(
          searchTerm.toLowerCase()
        ) &&
        (selectedCategory === "" || product.category === selectedCategory)
    )
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === "title") {
        comparison = (a.title || "").localeCompare(b.title || "");
      } else if (sortBy === "price") {
        comparison = (a.price || 0) - (b.price || 0);
      } else if (sortBy === "stock") {
        comparison = (a.totalStock || 0) - (b.totalStock || 0);
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const calculateDiscount = (price, salePrice) => {
    if (!price || !salePrice || Number(price) <= Number(salePrice)) return 0;
    return Math.round(
      ((Number(price) - Number(salePrice)) / Number(price)) * 100
    );
  };

  // Dummy products from Featured section if products list is empty
  const dummyProducts = [
    {
      _id: "1",
      title: "Pinapple Bamboo Lamp",
      image: "/pic/3.jpg",
      price: 45.99,
      totalStock: 25,
      productId: "PBL-001",
      salePrice: 45.99,
      discount: 0,
    },
    {
      _id: "2",
      title: "Bamboo Earring Set",
      image: "/pic/7.jpeg",
      price: 89.99,
      totalStock: 12,
      productId: "BES-002",
      salePrice: 89.99,
      discount: 0,
    },
    {
      _id: "3",
      title: "Landloom Saree",
      image: "/pic/12.webp",
      price: 35.5,
      totalStock: 8,
      productId: "LS-003",
      salePrice: 35.5,
      discount: 0,
    },
  ];

  const displayProducts =
    products.length === 0 ? dummyProducts : filteredProducts;

  const durationOptions = [
    { label: "24 hr", value: "24hr" },
    { label: "2 day", value: "2d" },
    { label: "3 day", value: "3d" },
    { label: "4 day", value: "4d" },
    { label: "5 day", value: "5d" },
    { label: "6 day", value: "6d" },
    { label: "1 week", value: "1w" },
  ];

  return (
    <div className="relative">
      <div
        className={`p-6 bg-gray-50 min-h-screen transition-all duration-300 ${
          editingProduct ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Your Products</h2>
            <button
              onClick={fetchProducts}
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
                  placeholder="Search products..."
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
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split("-");
                    setSortBy(field);
                    setSortOrder(order);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="title-asc">Name (A-Z)</option>
                  <option value="title-desc">Name (Z-A)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="stock-asc">Stock (Low to High)</option>
                  <option value="stock-desc">Stock (High to Low)</option>
                </select>
              </div>
            </div>
          </div>

          {error && null}

          {loading ? (
            <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow-md">
              <Loader2 className="animate-spin w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-indigo-600 text-lg">
                Loading products...
              </span>
            </div>
          ) : displayProducts.length === 0 ? (
            <div className="text-center bg-white rounded-lg shadow-md p-10">
              <ImageOff className="mx-auto mb-4 w-16 h-16 text-gray-400" />
              <p className="text-xl text-gray-500">No products found</p>
              <p className="text-gray-400 mt-2">
                Try changing your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProducts.map((product, idx) => {
                const discountPercentage = calculateDiscount(
                  product.price,
                  product.salePrice
                );
                const isHosted = hostedProducts.includes(product._id);
                return (
                  <div
                    key={product._id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-blue-100 relative"
                  >
                    <div className="absolute top-2 left-2 z-10">
                      <MenuDropdown
                        onEdit={() => setEditingProduct(product)}
                        onOutOfStock={() => handleMarkOutOfStock(product)}
                      />
                    </div>
                    <div className="relative">
                      <img
                        src={
                          product.image ||
                          "https://via.placeholder.com/400x300.png?text=No+Image"
                        }
                        alt={product.title}
                        className="w-full h-56 object-cover rounded-t-2xl border-b-4 border-blue-200"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x300.png?text=No+Image";
                        }}
                      />
                      {discountPercentage > 0 && (
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md font-semibold shadow">
                          {discountPercentage}% OFF
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {product.title}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-sm">
                          Product ID:{" "}
                          <span className="font-semibold text-gray-700">
                            {product.productId || product._id}
                          </span>
                        </span>
                        <span className="text-gray-500 text-sm">
                          Stock:{" "}
                          <span className="font-semibold text-gray-700">
                            {product.totalStock || 0}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-blue-600">
                          ₹{(product.salePrice * 83).toLocaleString()}
                        </span>
                        {discountPercentage > 0 && (
                          <span className="text-gray-400 line-through text-sm">
                            ₹{(product.price * 83).toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex flex-col gap-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Deal/Discount (%)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={product.discount || 0}
                            onChange={(e) => {
                              const discount = Math.max(
                                0,
                                Math.min(100, Number(e.target.value))
                              );
                              const newSalePrice =
                                product.price * (1 - discount / 100);
                              if (products.length === 0) {
                                displayProducts[idx].discount = discount;
                                displayProducts[idx].salePrice = newSalePrice;
                                setProducts([]); // force re-render
                              } else {
                                // Update real product (if needed)
                              }
                            }}
                            className="w-20 px-2 py-1 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500"
                          />
                          <select
                            value={product.dealDuration || "24hr"}
                            onChange={(e) => {
                              if (products.length === 0) {
                                displayProducts[idx].dealDuration =
                                  e.target.value;
                                setProducts([]); // force re-render
                              } else {
                                // Update real product (if needed)
                              }
                            }}
                            className="px-2 py-1 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500"
                          >
                            {durationOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {!isHosted ? (
                          <button
                            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition"
                            onClick={() =>
                              setHostedProducts([
                                ...hostedProducts,
                                product._id,
                              ])
                            }
                          >
                            Host Product
                          </button>
                        ) : (
                          <button
                            className="mt-2 w-full bg-white border border-blue-600 text-blue-600 font-semibold py-2 rounded-lg shadow hover:bg-blue-50 transition"
                            onClick={() =>
                              setHostedProducts(
                                hostedProducts.filter(
                                  (id) => id !== product._id
                                )
                              )
                            }
                          >
                            Remove Hosting
                          </button>
                        )}
                        <button
                          className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow transition"
                          onClick={() => deleteProduct(product._id)}
                        >
                          Remove Product
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-6 text-center text-gray-500">
            Showing {displayProducts.length} of {products.length} products
          </div>
        </div>
      </div>
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <EditProduct
            product={editingProduct}
            onClose={() => setEditingProduct(null)}
            onProductUpdated={handleProductUpdate}
          />
        </div>
      )}
    </div>
  );
};

const MenuDropdown = ({ onEdit, onOutOfStock }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-1 rounded-full bg-white shadow border border-gray-200 focus:outline-none"
      >
        <MoreVertical size={22} />
      </button>
      {open && (
        <div className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1">
            <button
              onClick={() => {
                setOpen(false);
                onEdit();
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white"
            >
              Edit Product
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onOutOfStock();
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Mark Out of Stock
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const handleMarkOutOfStock = (product) => {
  toast.success(`${product.title} marked as out of stock!`);
};

export default ProductList;
