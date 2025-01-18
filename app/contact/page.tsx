"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { db } from "@/lib/firebase"
import { collection, addDoc } from "firebase/firestore"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date().toISOString()
      })

      setFormData({ name: "", email: "", message: "" })
      alert("ההודעה נשלחה בהצלחה!")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("אירעה שגיאה בשליחת הטופס. אנא נסה שוב.")
    }

    setIsSubmitting(false)
  }

  return (
    <div dir="rtl" className="container py-12 md:py-24">
      <div className="max-w-[600px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">צור קשר</h1>
          <p className="text-lg text-gray-400">
            נשמח לשמוע ממך ולעזור בכל שאלה
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">שם מלא</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">אימייל</label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">הודעה</label>
            <Textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[150px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "שולח..." : "שלח הודעה"}
          </Button>
        </form>
      </div>
    </div>
  )
}