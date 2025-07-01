"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Sparkles, Heart, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  }

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-50  to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/40  via-pink-200/40 to-rose-200/40"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20"
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-25"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-8 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 border-2 border-amber-200/50 px-6 py-2 text-sm font-medium shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Recipe Generation
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight"
              variants={fadeInUp}
            >
              Cook with Your
              <motion.span
                className="block bg-gradient-to-r from-rose-600  via-orange-600 to-amber-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Mood
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
              variants={fadeInUp}
            >
              Discover personalized recipes that match your emotions. From comfort food for cozy nights to energizing
              meals for busy days.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white text-lg px-10 py-4 h-auto font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 rounded-2xl"
                  onClick={() => window.location.href = '/create'}
                >
                  Start Cooking Now
                  <ChefHat className="ml-3 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-28 bg-gradient-to-br from-cyan-100 via-indigo-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Amazing Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our mood-based cooking experience unique
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-rose-50 overflow-hidden group">
                <CardContent className="p-10 text-center relative">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Heart className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Mood-Based Recipes</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Tell us how you're feeling, and we'll suggest the perfect recipe to match your mood and satisfy your
                    cravings.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-indigo-50 overflow-hidden group">
                <CardContent className="p-10 text-center relative">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Intelligence</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Advanced AI algorithms analyze your preferences, dietary restrictions, and mood to create personalized
                    recipe suggestions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-emerald-50 overflow-hidden group">
                <CardContent className="p-10 text-center relative">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Clock className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick & Easy</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Get instant recipe recommendations with step-by-step instructions, cooking times, and ingredient
                    lists.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-amber-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to discover your perfect recipe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-3xl font-black shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                1
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Mood</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tell us how you're feeling today - happy, stressed, adventurous, or craving comfort food.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-3xl font-black shadow-2xl"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                2
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Magic</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our AI analyzes your mood, preferences, and dietary needs to find the perfect recipe match.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-3xl font-black shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                3
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Cooking</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get detailed instructions, ingredient lists, and cooking tips to create your perfect meal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-purple-200 via-rose-200 to-orange-200">
        <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Ready to Cook with Your Mood?</h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
              Join thousands of home cooks who've discovered the joy of mood-based cooking
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white text-xl px-12 py-5 h-auto font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 rounded-2xl"
                  onClick={() => window.location.href = '/create'}
                >
                  Start Cooking Now
                  <ChefHat className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}