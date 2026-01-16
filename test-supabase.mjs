import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
    console.log('Testing connection to:', supabaseUrl)

    const { data, error } = await supabase
        .from('categories')
        .select('count', { count: 'exact', head: true })

    if (error) {
        if (error.code === '42P01') {
            console.log('Table "categories" does not exist. Schema needs to be applied.')
        } else {
            console.error('Connection error:', error.message)
        }
        process.exit(1)
    }

    console.log('Connection successful! Table "categories" exists.')
}

testConnection()
