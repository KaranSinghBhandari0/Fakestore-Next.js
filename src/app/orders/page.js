"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { orders } from "@/utils/helper";
import Pagination from "@/components/Pagination";

export default function OrdersPage() {

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = orders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Filter orders for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  }
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Orders</h1>

      <div className="overflow-x-auto border rounded-lg">
        <OrdersTable orders={paginatedOrders} />
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

function OrdersTable({ orders }) {
  return (
    <table className="w-full border-collapse">
      <thead className="bg-gray-100 text-gray-800 text-sm">
        <tr>
          <th className="p-3 text-left">Order Id</th>
          <th className="p-3 text-left">Order Date</th>
          <th className="p-3 text-left">Delivery Date</th>
          <th className="p-3 text-left">Order Status</th>
          <th className="p-3 text-left">Order Price</th>
          <th className="p-3 text-left">Mode Of Payment</th>
        </tr>
      </thead>

      <tbody className="text-sm text-gray-700">
        {orders.map((order) => (
          <tr key={order.id} className="border-t hover:bg-gray-50">
            <td className="p-3">{order.order_number}</td>
            <td className="p-3">{order.order_date}</td>
            <td className="p-3">{order.delivery_date ?? "—"}</td>
            <td className="p-3 capitalize">{order.status}</td>
            <td className="p-3 font-medium text-gray-800">₹{order.price}</td>
            <td className="p-3">{order.mode_of_payment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
