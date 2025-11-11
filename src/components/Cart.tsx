import React from "react";
import type { CartItem } from "../types/cart";
import { PHONE_NUMBER } from "../config";
import { X, Trash2 } from "lucide-react";

type Props = {
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
};

const Cart: React.FC<Props> = ({ items, onClose, onUpdateQty, onRemove }) => {
  const total = items.reduce((s, it) => s + it.product.price * it.qty, 0);

  const buildMessage = () => {
    const lines: string[] = [];
    lines.push("🛍️ *Order from Desi Originals*");
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

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full sm:w-[400px] h-full flex flex-col rounded-l-2xl shadow-xl overflow-hidden animate-slideIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#ff7d50] to-[#d72b3f] text-white px-5 py-4 flex justify-between items-center">
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
                  <h4 className="font-semibold text-gray-800">
                    {it.product.title}
                  </h4>
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
              onClick={sendWhatsapp}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.93 7.93 0 008.002.082a7.93 7.93 0 00-5.6 2.244 7.902 7.902 0 00-2.3 5.58 7.902 7.902 0 001.104 4.015L.667 15.66l3.834-1.006a7.933 7.933 0 003.497.877h.003a7.908 7.908 0 005.58-2.3 7.931 7.931 0 002.323-5.59 7.9 7.9 0 00-2.303-5.315zM8.003 14.07a6.013 6.013 0 01-3.075-.84l-.22-.13-2.27.596.607-2.212-.143-.227a6.063 6.063 0 01-.94-3.26 6.073 6.073 0 011.786-4.302 6.063 6.063 0 014.306-1.785 6.06 6.06 0 014.305 1.786 6.063 6.063 0 011.787 4.304 6.07 6.07 0 01-1.786 4.304 6.073 6.073 0 01-4.304 1.786zm3.422-4.53c-.188-.094-1.11-.547-1.282-.61-.172-.063-.297-.094-.421.094-.125.187-.484.61-.594.735-.109.125-.219.141-.406.047-.188-.094-.79-.29-1.506-.924a5.63 5.63 0 01-1.04-1.29c-.109-.188-.012-.29.082-.384.085-.085.188-.219.281-.328.094-.11.125-.188.188-.313.063-.125.032-.235-.016-.329-.047-.094-.421-1.016-.578-1.39-.152-.36-.305-.313-.421-.313h-.36a.7.7 0 00-.515.235c-.172.187-.672.656-.672 1.6s.688 1.855.782 1.985c.094.125 1.344 2.05 3.26 2.875.456.197.812.313 1.09.4.457.146.875.125 1.203.075.367-.055 1.11-.453 1.266-.89.156-.437.156-.812.11-.89-.047-.078-.172-.125-.36-.219z" />
              </svg>
              Proceed to WhatsApp Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
