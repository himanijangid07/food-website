import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../config";

const useCart = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const {refetch, data:cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}/carts?email=${user?.email}`, {
              headers: {
                authorization: `Bearer ${token}`
              }
            })
            return response.json()
          },
    })
  return [cart, refetch]
}

export default useCart
