"use client"

import { useEffect, useState } from "react"
import { auth, db } from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { collection, getDocs, doc, updateDoc } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
    } catch (error) {
      console.error("Login error:", error)
      alert("שגיאה בהתחברות. אנא בדוק את הפרטים ונסה שוב.")
    }
  }

  const fetchContacts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "contacts"))
      const contactsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setContacts(contactsData)
    } catch (error) {
      console.error("Error fetching contacts:", error)
    }
  }

  if (loading) {
    return <div className="container py-12">טוען...</div>
  }

  if (!isLoggedIn) {
    return (
      <div dir="rtl" className="container py-12 max-w-[400px] mx-auto">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">התחברות למערכת ניהול</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">אימייל</label>
              <Input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">סיסמה</label>
              <Input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              התחבר
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div dir="rtl" className="container py-12">
      <h1 className="text-3xl font-bold mb-8">מערכת ניהול</h1>
      
      <Tabs defaultValue="contacts">
        <TabsList>
          <TabsTrigger value="contacts">פניות</TabsTrigger>
          <TabsTrigger value="content">תוכן</TabsTrigger>
        </TabsList>

        <TabsContent value="contacts" className="mt-6">
          <Button onClick={fetchContacts} className="mb-4">
            רענן פניות
          </Button>
          
          <div className="grid gap-4">
            {contacts.map((contact: any) => (
              <Card key={contact.id} className="p-4">
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-gray-400">{contact.email}</div>
                <div className="mt-2">{contact.message}</div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="font-medium mb-2">עריכת תוכן ראשי</h3>
              <Textarea className="mb-2" placeholder="תוכן ראשי..." />
              <Button>שמור שינויים</Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}