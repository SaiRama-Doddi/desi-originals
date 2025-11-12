import React, { useState } from "react";
import type { CartItem } from "../types/cart";
import { PHONE_NUMBER } from "../config";
import { X, Trash2 } from "lucide-react";

type Props = {
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
};

type CustomerInfo = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

const Cart: React.FC<Props> = ({ items, onClose, onUpdateQty, onRemove }) => {
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const total = items.reduce((s, it) => s + it.product.price * it.qty, 0);

  const buildMessage = () => {
    const lines: string[] = [];
    lines.push("🛍️ *Order from Desi Originals*");
    lines.push("");
    lines.push(`*Customer Info:*`);
    lines.push(`Name: ${customer.name}`);
    lines.push(`Phone: ${customer.phone}`);
    lines.push(`Email: ${customer.email}`);
    lines.push(`Address: ${customer.address}`);
    lines.push("");
    items.forEach((it) =>
      lines.push(`${it.qty} x ${it.product.title} - ₹${it.product.price * it.qty}`)
    );
    lines.push("");
    lines.push(`*Total:* ₹${total}`);
    return encodeURIComponent(lines.join("\n"));
  };

  const sendWhatsapp = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${buildMessage()}`;
    window.open(url, "_blank");
  };

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check that all fields are filled
    if (!customer.name || !customer.phone || !customer.email || !customer.address) return;
    setShowCustomerForm(false);
    sendWhatsapp();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full sm:w-[400px] h-full flex flex-col rounded-l-2xl shadow-xl overflow-hidden animate-slideIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8a1f44] to-[#c92a55] text-white px-5 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} className="hover:opacity-80 transition">
            <X size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              Your cart is empty 🛒
            </div>
          ) : (
            items.map((it) => (
              <div
                key={it.product.id}
                className="flex items-center gap-3 bg-[#fff9f5] border border-orange-100 rounded-xl p-3"
              >
                <img
                  src={it.product.images[0]}
                  alt={it.product.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{it.product.title}</h4>
                  <p className="text-sm text-[#d72b3f] font-medium">
                    ₹{it.product.price} / dozen
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQty(it.product.id, it.qty - 1)}
                      disabled={it.qty <= 1}
                      className="border border-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-100 disabled:opacity-50"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{it.qty}</span>
                    <button
                      onClick={() => onUpdateQty(it.product.id, it.qty + 1)}
                      className="border border-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-100"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(it.product.id)}
                      className="ml-3 text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t bg-white p-4">
            <div className="flex justify-between text-lg font-bold mb-3">
              <span>Total:</span>
              <span className="text-[#d72b3f]">₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setShowCustomerForm(true)}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Proceed to WhatsApp Order
            </button>
          </div>
        )}

        {/* Customer Info Modal */}
        {showCustomerForm && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
            <form
              onSubmit={handleCustomerSubmit}
              className="bg-white p-6 rounded-xl w-full max-w-md flex flex-col gap-4 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Enter Your Details
              </h3>
              <input
                type="text"
                placeholder="Name"
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={customer.phone}
                onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={customer.email}
                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
              <textarea
                placeholder="Address"
                value={customer.address}
                onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none resize-none"
                rows={3}
                required
              />
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setShowCustomerForm(false)}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
